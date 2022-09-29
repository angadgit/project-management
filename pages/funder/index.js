import React from 'react'
import { getSession } from "next-auth/react"
import DefaultLayout from '../../components/DefaultLayout';
import { BiUserPlus } from "react-icons/bi";
import FunderAddForm from '../../components/funder/funderAddForm';
import FunderTable from '../../components/funder/funderTable';

export default function Funder() {
  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800'>
            Add Funder <span className='px-1'><BiUserPlus size={23}></BiUserPlus></span>
          </button>
        </div>
      </div>

      {/* collapsable form */}
      <div className="container mx-auto py-5">
        <FunderAddForm />
      </div>

      {/* table */}
      <div className="container mx-auto">
        <FunderTable />
      </div>

    </DefaultLayout>
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
