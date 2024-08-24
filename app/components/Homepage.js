import React from 'react'
import Button from '../components/Button'
import Link from 'next/link'

const Homepage = () => {
  return (
    <>
      <div className="h-full w-full  ">
        <div className='min-h-[91vh] bg-black bg-opacity-50 flex gap-3 flex-col items-center justify-center'>     
            <div className='font-semibold text-6xl'>Bull Street</div>
            <div className='text-green-600'>EARLY ACCESS</div>
            <div>Start Minting Or Trading In Seconds</div>
            <div className='font-normal text-neutral-300 text-sm'>Connect your Wallet to start minting ortrading instantly</div>
            <Link href='/home'> <Button/></Link>
          
            </div>
      </div>
    </>
  )
}

export default Homepage
