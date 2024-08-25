'use client'
import Link from 'next/link'
import React, {useState} from 'react'
import {ethers} from 'ethers'
declare var ethereum: any;

const Navbar = () => {
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
          setConnected(true);
          console.log(signer);
          
          // setWalletAddress(accounts[0]); 
          
          
          
        } else {
          setConnected(false);
        }
      } catch (error) {
        console.error('Error checking MetaMask connection:', error);
        setConnected(false);
      }
    } else {
      setConnected(false);
    }
  };
  
  


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
      <div className='bg-black bg-opacity-50 flex justify-between px-7 py-3'>
        <div className='flex items-center gap-10'>
        <div className='text-xl font-semibold'>Bull Street</div>
        <Link href="/home" className='text-sm'>Home</Link>
        <Link href="/pair" className='text-sm'>New Pair</Link>
        <Link href="/Explore" className='text-sm'>Token Explorer</Link>
        </div>
        <div></div>
        {!connected ? (
            <button className='bg-green-600 px-3 py-2 rounded text-xs font-normal cursor-pointer hover:bg-green-700' onClick={walletConnect}>
              Connect Wallet
            </button>
          ) : (
            <div className='bg-green-600 px-3 py-2 rounded text-xs font-normal cursor-pointer hover:bg-green-700'>
              {walletAddress}
            </div>
          )}
      </div>
    </>
  )
}

export default Navbar
