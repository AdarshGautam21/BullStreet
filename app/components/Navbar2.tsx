'use client'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


function Navbar2() {

  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const walletConnect = async () =>{

    setWalletAddress('0x')
    setConnected(true)
  }


  return (
    <>
     <div className='bg-black bg-opacity-50 flex justify-between px-7 py-3 w-[100vw]'>
        <div className='relative text-xl font-semibold flex items-center'>
        <FiSearch  className='absolute left-2 opacity-55 text-sm '/>
            <input type="search" className='px-7 py-2 text-xs font-normal bg-transparent border-gray-600 border-[0.3px] rounded ' placeholder='Search' />
        </div>
        <div className='flex gap-2 items-center'>
        <div className='bg-slate-800 p-2 rounded  cursor-pointer hover:bg-green-700'><FaBell /></div>
         <div className='bg-slate-800 p-2 rounded  cursor-pointer hover:bg-green-700'><FaStar /></div> 
         <div className='bg-slate-800  px-3 py-2 rounded text-xs font-normal cursor-pointer hover:bg-green-800'>Position</div>


         {!connected ? (
            <button className='bg-green-600 px-3 py-2 rounded text-xs font-normal cursor-pointer hover:bg-green-700' onClick={walletConnect}>
              Connect Wallet
            </button>
          ) : (
            <div className='bg-green-600 px-3 py-2 rounded text-xs font-normal cursor-pointer hover:bg-green-700'>
              {walletAddress}
            </div>
          )}

          {/* <button className='bg-green-600 px-3 py-2 rounded text-xs font-normal   cursor-pointer hover:bg-green-700' onClick={walletConnect}>Connect Wallet</button> */}
        </div>
      
      </div>
    </>
  )
}

export default Navbar2
