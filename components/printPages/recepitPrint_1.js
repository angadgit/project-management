import React from 'react'
import ReactToPrint from 'react-to-print';
import Image from "next/image";

export default function RecepitPrint_1() {
  const componentRef = useRef()
  return (
    <>
      <div className='flex justify-center'>

        <div className=' mt-5 w-xl p-5 text-center' ref={componentRef}>
          <h1 className='text-xl'>80G / Donations Receipt</h1><hr />
          <div className='grid grid-cols-6 gap-4 mt-5'>
            <div className='w-3/4'>
              {/* <h1>logo</h1> */}
              <Image src="" alt="logo" width={150} height={150}></Image>
              {/* <img src="" alt="logo" width="150" height="150" className="bg-black" /> */}
            </div>
            <div className='col-start-2 col-span-4'>
              <h1 className='text-lg'>Company Name</h1>
              <span>Company Address</span>
              <p className='flex justify-center'> Mobile:- <h1 className='mr-5'>company Mobile no</h1>  Email :- <h1>Compnay Email</h1></p>
            </div>
            <div className='text-end mr-5'>
              <h1>10001</h1>
            </div>
          </div>
          <div className='text-end mr-5'>
            <h1>Date :- Date of recepit</h1>
          </div>
          <div className='grid grid-cols-2'>
            <div className='text-start'>
              <h1>Received From :- Recepit name</h1>
            </div>
            <div className='text-end mr-8'>
              <h1>Amount :- Recepit amount</h1>
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <h1 className='text-start'>As Donations for :- Recepit Deps</h1>
          </div>
          <div className='grid grid-cols-2 mb-5'>
            <h1 className='text-start'>payment mode Recepit payment type</h1>
            {/* <h1>by</h1> */}
          </div>
          <hr />
          <div className='grid grid-cols-3 '>

            <div className='flex'>Pan :- <h1 className="font-semibold ml-2 uppercase">Company Pan</h1> </div>
            <div className='flex'>12A Registration no :- <h1 className="font-semibold ml-2 uppercase">company 12A</h1> </div>
            <div className='flex'>80G Registration no :- <h1 className="font-semibold ml-2 uppercase">Compnay 80G</h1> </div>
            <div className='flex'>Organization Type :- <h1 className="font-semibold ml-2">Company organizationType</h1> </div>
            <div className='flex'>Organization Registration no :- <h1 className="font-semibold ml-2">Company organizationRegistrationNo</h1> </div>

          </div>
          <hr />
        </div>
      </div>
      <div className='text-end'>
        <ReactToPrint
          trigger={() => <button variant='outlined'>Print / Download</button>}
          content={() => componentRef.current}
        />
      </div>
    </>
  )
}
