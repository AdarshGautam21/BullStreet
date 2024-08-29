'use client'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { ethers } from 'ethers';
declare var ethereum: any;


function Navbar2() {

  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')



  const checkMetaMask = async () => {
    console.log("yo");
    
    if (typeof (window as any).ethereum !== 'undefined') {
      try {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      

      // await (window as any).ethereum.request({
      //   method: 'wallet_addEthereumChain',
      //   params: [
      //     {
      //       chainId: '0x1995901',
      //       chainName: 'NERO-Testnet',
      //       rpcUrls: ['https://testnet.nerochain.io/'], // Add your RPC URL for Sepolia
      //       nativeCurrency: {
      //         name: 'Nero',
      //         symbol: 'NERO',
      //         decimals: 18,
      //       },
      //       blockExplorerUrls: ['https://testnetscan.nerochain.io/'],
      //     },
      //   ],
      // });


      const signer = await provider.getSigner() 
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
          setWalletAddress(signer.address)
          const network = await provider.getNetwork();

          if(network.chainId !== BigInt(656476)){

            await (window as any).ethereum.request(
              {
                  method: 'wallet_switchEthereumChain',
                  params: [{ chainId: '0xa045c' }],
              }
          );
        }
        setConnected(true);
        }

          
          // setWalletAddress(accounts[0]); 
          
          
          
         else {
          setConnected(false);
        }
      } 
      catch(err){
        console.log(err);
        
      }
  }
}
  
  


  const connectWallet = async () => {
    try {
      await ethereum.request({ method: 'eth_requestAccounts' });
      checkMetaMask();
    } catch (error) {
      console.error('Error connecting MetaMask:', error);
    }
  };







  const walletConnect = async () =>{
    console.log("hii");
    

    connectWallet();

    // setWalletAddress('0x')
    // setConnected(true)
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
