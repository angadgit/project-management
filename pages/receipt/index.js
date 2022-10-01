import React from 'react'
import { getSession } from "next-auth/react"
import { BiBookmarkAltPlus } from "react-icons/bi";
import DefaultLayout from '../../components/DefaultLayout';
import ReceiptAddForm from '../../components/recepit/recepitAddForm';
import RecepitTable from '../../components/recepit/recepitTable';
import { useState } from 'react';

export default function Receipt() {

  const [visible, setVisible] = useState(false)

  const handler = () => {
    setVisible(!visible)
  }

  

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800' onClick={handler}>
            Add Recepit <span className='px-1'><BiBookmarkAltPlus size={23}></BiBookmarkAltPlus></span>
          </button>
        </div>
      </div>

      {/* collapsable form */}
      <div className="container mx-auto py-5">
        {visible ? <ReceiptAddForm /> : <></>}
        {/* <ReceiptAddForm /> */}
      </div>

      {/* model popup  */}

      {/* table */}
      <div className="container mx-auto">
        <RecepitTable />
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
