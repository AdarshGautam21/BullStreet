import Image from 'next/image'
import { PiSlideshowBold } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { TbUsers } from "react-icons/tb";
import React from 'react'


function Card() {
    return (
        <>
            <div className=' w-92 h-24 border rounded flex items-center justify-around bg-black border-neutral-500 p-1'>

                <div className="overflow-hidden rounded-full h-18 w-18">
                    <Image width={100} height={100} src="/bit.jpeg" alt="bit" />
                </div>

                <div className='flex flex-col justify-around h-full w-full px-3'>

                    <div className='flex gap-2 items-center justify-between w-full'>
                        <div className='flex items-center gap-2 '>
                            <div className='text-xl font-semibold'>$BOXEY</div>
                            <div className='text-xs text-neutral-400'>Boxey</div>
                            <div className=''><PiSlideshowBold className='text-neutral-400' /></div>
                        </div>
                        <div>
                            <div className='border-green-600 cursor-pointer rounded border text-sm px-2 text-green-600 hover:bg-green-600 hover:text-white'>BUY</div>
                        </div>

                    </div>
                    <div className='w-full border border-neutral-500'></div>
                    <div className='flex w-full justify-between'>
                        <div className='flex items-center gap-1'>
                            <div className='bg-slate-600 rounded-full p-1 text-xs'><CiGlobe className='text-neutral-400' /></div>
                            <div className='bg-slate-600 rounded-full p-1 text-xs'><FaTwitter className='text-neutral-400' /></div>
                            <div className='bg-slate-600 rounded-full p-1 text-xs'><FaTelegramPlane  className='text-neutral-400'/></div>
                            <div className='bg-slate-600 rounded-full p-1 text-xs'><FaDiscord  className='text-neutral-400'/></div>
                            <div></div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center text-md gap-1'><TbUsers /><div className='text-neutral-500'>2</div></div>
                            <div className='text-xs gap-1 text-neutral-500'>V <span className='text-green-600'>$10K </span></div>
                            <div className='text-sm text-neutral-500'>MC <span className='text-green-600'> $10k</span></div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Card
