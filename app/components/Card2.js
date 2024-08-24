import React from 'react'
import { IoShieldOutline } from "react-icons/io5";
import { RiStockFill } from "react-icons/ri";
import { PiSlideshowBold } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Image from 'next/image'


function Card2() {
    return (
        <>
            <div className='bg-slate-900 w-full h-full flex p-2 items-center rounded'>

                <div className='text-2xl p-2 text-red-500'><IoShieldOutline/></div>

                <div className='w-full flex gap-2 items-center'>
                    <div className="overflow-hidden h-24 w-24 flex items-center justify-center">
                        <Image width={100} height={100} src="/bit.jpeg" alt="bit" className='rounded-full' />
                    </div>


                    <div className='flex flex-col gap-3 justify-around h-full w-full px-3'>

                        <div className='flex gap-2 items-center justify-between w-full'>
                            <div className='flex items-center gap-2 '>
                                <div className='text-md font-semibold'>$BOXEY</div>
                                <div className='text-xs text-neutral-400'>Boxey</div>
                                <div className=''><PiSlideshowBold className='text-neutral-400' /></div>
                            </div>
                        </div>
                        <div className='flex w-full justify-between'>
                            <div className='flex items-center gap-1'>
                                <div className='bg-slate-600 rounded-full p-1 text-xs'><CiGlobe className='text-neutral-400' /></div>
                                <div className='bg-slate-600 rounded-full p-1 text-xs'><FaTwitter className='text-neutral-400' /></div>
                                <div className='bg-slate-600 rounded-full p-1 text-xs'><FaTelegramPlane className='text-neutral-400' /></div>
                                <div className='bg-slate-600 rounded-full p-1 text-xs'><FaDiscord className='text-neutral-400' /></div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-neutral-400 text-sm'>7K</div>
                    <div className='text-neutral-400 text-sm'>U.Holders</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-cyan-600 font-normal text-sm'>395K</div>
                    <div className='text-neutral-400 text-sm'>Liquidity</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-neutral-400 text-sm'>392</div>
                    <div className='text-neutral-400 text-sm'>Volume</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-yellow-500 text-sm'>1M</div>
                    <div className='text-neutral-400 text-sm'>Market Cap</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full flex items-center justify-center'>
                    <div className='text-red-700 text-4xl'><RiStockFill/></div>
                    <div className='text-yellow-600 text-4xl'><RiStockFill/></div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-red-700 text-sm'>0.2063%</div>
                    <div className='text-neutral-400 text-sm'>1 M</div>
                </div>
                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-neutral-200 text-sm'>1.7K</div>
                    <div className='text-neutral-400 text-sm'>Swaps</div>
                </div>
            </div>
        </>
    )
}

export default Card2
