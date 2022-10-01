import React from 'react'
import { getSession } from "next-auth/react"
import DefaultLayout from '../../components/DefaultLayout';
import { BiUserPlus } from "react-icons/bi";
import FunderForm from '../../components/funder/funderForm';
import FunderTable from '../../components/funder/funderTable';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction, deleteAction } from '../../redux/reducer';
import { deleteUser, getUsers } from '../../lib/helper';
import { BiX, BiCheck } from "react-icons/bi";
import { useQueryClient } from 'react-query';

export default function Funder() {
  const visible = useSelector((state) => state.app.client.toggleForm)
  const deleteId = useSelector(state => state.app.client.deleteId)
  const queryclient = useQueryClient();

  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())
  }

  const deletehandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryclient.prefetchQuery('users', getUsers)
      await dispatch(deleteAction(null))
    }
  }

  const canclehandler = async () => {
    console.log("cancel")
    await dispatch(deleteAction(null))
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800' onClick={handler}>
            Add Funder <span className='px-1'><BiUserPlus size={23}></BiUserPlus></span>
          </button>
        </div>
        {deleteId ? DeleteComponent({ deletehandler, canclehandler }) : <></>}
      </div>

      {/* collapsable form */}
      {visible ? <FunderForm /> : <></>}

      {/* table */}
      <div className="container mx-auto">
        <FunderTable />
      </div>

    </DefaultLayout>
  )
}

function DeleteComponent({ deletehandler, canclehandler }) {
  return (
    <div className='flex gap-5'>
      <button>Are you sure?</button>
      <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>
        Yes <span className='px-1'><BiX color='rgb(255 255 255)' size={25} /></span></button>
      <button onClick={canclehandler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50'>
        No <span className='px-1'><BiCheck color='rgb(255 255 255)' size={25} /></span></button>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false
      }
    }
  }
  // authorize user return session
  return {
    props: { session }
  }
}
