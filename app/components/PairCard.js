import React from 'react'
import { IoShieldOutline } from "react-icons/io5";
import { RiStockFill } from "react-icons/ri";
import { PiSlideshowBold } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Image from 'next/image'

function PairCard() {
    return (
        <>
            <div className='bg-slate-900 w-full h-full flex p-2 items-center rounded'>


                <div className='w-full flex gap-2 items-center'>
                    <div className="overflow-hidden h-20 w-20 flex items-center justify-center">
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
                    </div>

                </div>


                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-red-700 text-sm'>1S</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-white font-normal text-sm'>395K</div>
                    <div className='text-green-400 text-sm'>+0%</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-neutral-400 text-sm'>0$</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                    <div className='text-neutral-400 text-sm'>0$</div>
                    <div className='text-green-400 text-sm'>$0.05412</div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full flex items-center justify-center'>
                 <div className='text-neutral-200 text-sm'>01</div>
                </div>

                 <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full flex items-center justify-center'>
                 <div className='text-neutral-500 text-sm'>$0</div>
                </div> 

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full flex items-center justify-center'>
                    <div className='flex gap-3 items-center text-neutral-400 text-xs  px-1 py-1 rounded'>
                    <div className='bg-green-900 text-teal-300 py-1 px-2 rounded'>24H</div>
                    <div className='px-2 py-1 rounded bg-green-900 text-teal-500'>MAD</div>
                    <div className='px-2 py-1 rounded bg-green-900 text-teal-500'>FAD</div>
                    <div className='px-2 py-1 rounded bg-green-900 text-teal-500'>LB</div>
                    <div className='px-2 py-1 rounded bg-green-900 text-teal-500'>T10</div>
                    </div>
                </div>

                <div className='h-16 border-neutral-500 border-l'></div>
                <div className='px-4 py-1 text-center w-full'>
                <div className='p-1 rounded bg-green-900'>BUY</div>
                </div>
            </div>
        </>
    )
}

export default PairCard
