'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='bg-black bg-opacity-50 flex justify-between px-7 py-3'>
        <div className='flex items-center gap-10'>
        <div className='text-xl font-semibold'>Bull Street</div>
        <Link href="/home" className='text-sm'>Home</Link>
        <Link href="/pair" className='text-sm'>New Pair</Link>
        <Link href="/Explore" className='text-sm'>Token Explorer</Link>
        </div>
        <div></div>
        <div className='bg-green-600 px-2 py-1 rounded  cursor-pointer hover:bg-green-700'>Connect wallet</div>
      </div>
    </>
  )
}

export default Navbar
