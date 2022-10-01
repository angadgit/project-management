import React from 'react'
import { getSession } from "next-auth/react"
import DefaultLayout from '../../components/DefaultLayout';
import { BiStoreAlt } from "react-icons/bi";
import CompanyProfileAddForm from '../../components/companyProfile/companyAddForm';
import { useState } from 'react';

export default function CompanyProfile() {

  const [visible, setVisible] = useState(false)

  const handler = () => {
    setVisible(!visible)
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800' onClick={handler}>
            Add Company <span className='px-1'><BiStoreAlt size={23}></BiStoreAlt></span>
          </button>
        </div>
      </div>

      {/* collapsable form */}
      <div className="container mx-auto py-5">
        {visible ? <CompanyProfileAddForm /> : <></>}
      </div>

      {/* table */}
      <div className="container mx-auto">
        {/* <FunderTable /> */}
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
