import React from 'react'
import { getSession } from "next-auth/react"
import DefaultLayout from '../../components/DefaultLayout';

export default function Receipt() {
  return (
    <DefaultLayout>
      <div>Under Work</div>
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
