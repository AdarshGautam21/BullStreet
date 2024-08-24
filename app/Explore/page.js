import React from 'react'
import { MdOutlineShowChart } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";


import Navbar2 from '../components/Navbar2'
import Card2 from '../components/Card2'


const landingpage = () => {
  return (
    <>
      <div className='bg-slate-950'>
        <Navbar2 />

        <div className='flex justify-between p-8'>
          <div>
            <div className='text-green-600 font-normal text-2xl'>Token Explorer</div>
          </div>

          <div className='flex gap-5 items-center'>
            <div className='bg-slate-800 px-2 py-1  flex gap-3 items-center rounded text-sm  cursor-pointer '>BUY <input type="search" className='rounded w-14 p-1 bg-slate-600 border-neutral-700 border' placeholder='0- $' /></div>

            <div className='bg-slate-800 p-2 flex gap-2 items-center rounded  cursor-pointer hover:bg-green-700 text-sm'> <MdOutlineShowChart />Advance</div>
          </div>

        </div>

        <div className='flex w-full justify-between items-center px-8 py-1'>
          <div className='flex gap-1 items-center text-neutral-400 text-xs bg-slate-800 px-1 py-1 rounded'>
            <div className='bg-green-600 text-white py-1 px-2 rounded'>Trending</div>
            <div className='py-1 px-2 rounded'>Gainers</div>
            <div className='py-1 px-2 rounded'>Losers</div>
            <div className='py-1 px-2 rounded'>Recents</div>
          </div>

          <div className='flex gap-2 rounded items-center '>
            <div className='flex gap-1 items-center text-neutral-400 text-xs bg-slate-800 px-1 py-1 rounded'>
              <div className='bg-green-600 text-white py-1 px-2 rounded'>24H</div>
              <div className='p-1 rounded'>12HR</div>
              <div className='p-1 rounded'>6HR</div>
              <div className='p-1 rounded'>1HR</div>
              <div className='p-1 rounded'>5M</div>
              <div className='p-1 rounded'>1M</div>
            </div>
            <div className='flex bg-slate-800  p-1 rounded'>
              <div className='text-2xl text-neutral-400'><BsFilterLeft /></div>
              <div className='text-neutral-400'>filter</div>
            </div>

          </div>
        </div>
        <div className='py-3 px-4 flex flex-col gap-3'>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        <Card2/>
        </div>

      </div>
    </>
  )
}

export default landingpage
