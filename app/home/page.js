'use client'
// import React from 'react'
// import { MdOutlineShowChart } from "react-icons/md";
// import { BsFilterLeft } from "react-icons/bs";
// import { FaSeedling } from "react-icons/fa";
// import { GiGraduateCap } from "react-icons/gi";
// import { FaMedal } from "react-icons/fa";


// import Navbar2 from '../components/Navbar2'
// import Card from '../components/Card'
// import Card2 from '../components/Card2'
// import Link from 'next/link';


// const homepage = () => {
//   return (
//     <div className='bg-slate-950 '>
//       <Navbar2 />
//       <div className='flex justify-between px-9 py-8'>
//         <div>
//           <div className='text-green-600 font-semibold text-4xl'>Bull Street</div>
//           <div className='text-neutral-400'>Find the best BullStreet.fun tokens and track latest migrations</div>
//         </div>

//         <div className='flex gap-5 items-center'>

//           <div className='bg-slate-800 px-2 py-1  flex gap-3 items-center rounded text-sm  cursor-pointer '>BUY <input type="search" className='rounded w-14 p-1 bg-slate-600 border-neutral-700 border' placeholder='0- $' /></div>

//           <div className='bg-slate-800 p-2 flex gap-2 items-center rounded  cursor-pointer hover:bg-green-700 text-sm'> <MdOutlineShowChart />Advance</div>
//         </div>
//       </div>
//       <div className='w-full flex items-center justify-center py-8'>
//         <Link href='/Create'>
//         <div className='text-center bg-green-600 px-4 py-3 w-30 rounded text-lg font-normal   cursor-pointer hover:bg-green-700'>Start a new coin</div>
//         </Link>
//       </div>

//       <div className='flex w-[100%] items-start justify-evenly p-5'>

//         <div className='flex gap-3 flex-col rounded bg-slate-900 w-[33%] p-4'>
//           <div className='flex w-full justify-between items-center pb-3'>
//             <div className='flex gap-2 items-center font-normal'><FaSeedling className='text-neutral-500' />New Creation</div>
//             <div className='flex gap-2 rounded items-center bg-slate-700 p-2'>
//               <div className='text-2xl text-neutral-400'><BsFilterLeft /> </div>
//               <div className='text-neutral-400'>filter</div>
//               <div className='bg-green-700 px-3 rounded'>1</div>
//             </div>
//           </div>
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>

//         <div className='flex gap-3 flex-col rounded bg-slate-900 w-[33%] p-4'>
//           <div className='flex w-full justify-between items-center pb-3'>
//             <div className='flex gap-2 items-center font-normal'><GiGraduateCap className='text-neutral-500 text-3xl'  />About to Graduate</div>

//             <div className='flex gap-2 rounded items-center bg-slate-700 p-2'>
//               <div className='text-2xl text-neutral-400'><BsFilterLeft /> </div>
//               <div className='text-neutral-400'>filter</div>
//               <div className='bg-green-700 px-3 rounded'>1</div>
//             </div>
//           </div>

//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>

//         <div className='flex flex-col gap-3 rounded bg-slate-900 w-[33%] p-4'>
//           <div className='flex w-full justify-between items-center pb-3'>
//             <div className='flex gap-2 items-center font-normal'><FaMedal className='text-neutral-500 text-3xl' />Graduated</div>

//             <div className='flex gap-2 rounded items-center bg-slate-700 p-2'>
//               <div className='text-2xl text-neutral-400'><BsFilterLeft /> </div>
//               <div className='text-neutral-400'>filter</div>
//               <div className='bg-green-700 px-3 rounded'>1</div>
//             </div>
//           </div>

//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </div>

//       {/* <Card2/> */}
  
//     </div>
//   )
// }

// export default homepage




import React, {useEffect, useState} from 'react';
import { MdOutlineShowChart } from "react-icons/md";
import { BsFilterLeft } from "react-icons/bs";
import { FaSeedling, FaMedal } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import Navbar2 from '../components/Navbar2';
import Card from '../components/Card';
import Link from 'next/link';
import getAllAssets from '@/functions/listAssets';

const cardData = [
  { id: 1, title: 'Creation 1', subtitle: 'Boxey', description: 'Description of creation 1', imageSrc: '/bit.jpeg', twitterLink: '#', telegramLink: '#', discordLink: '#', followers: 2, value: '$10K', marketCap: '$10k' },
  { id: 2, title: 'Creation 2', subtitle: 'Boxey', description: 'Description of creation 2', imageSrc: '/bit.jpeg', twitterLink: '#', telegramLink: '#', discordLink: '#', followers: 2, value: '$10K', marketCap: '$10k' },
  { id: 3, title: 'Graduate 1', subtitle: 'Boxey', description: 'Description of graduate 1', imageSrc: '/bit.jpeg', twitterLink: '#', telegramLink: '#', discordLink: '#', followers: 2, value: '$10K', marketCap: '$10k' },
  { id: 4, title: 'Graduate 2', subtitle: 'Boxey', description: 'Description of graduate 2', imageSrc: '/bit.jpeg', twitterLink: '#', telegramLink: '#', discordLink: '#', followers: 2, value: '$10K', marketCap: '$10k' },
  { id: 5, title: 'Graduated 1', subtitle: 'Boxey', description: 'Description of graduated 1', imageSrc: '/bit.jpeg', twitterLink: '#', telegramLink: '#', discordLink: '#', followers: 2, value: '$10K', marketCap: '$10k' },
  { id: 6, title: 'Graduated 2', subtitle: 'Boxey', description: 'Description of graduated 2', imageSrc: '/bit.jpeg', twitterLink: '#', telegramLink: '#', discordLink: '#', followers: 2, value: '$10K', marketCap: '$10k' },
];






const Homepage = () => {


  const [allTokens, setAllTokens] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAssets();
        // if (response.data && response.data.fileList) {
        //   const imageExtensions = [".jpg", ".jpeg", ".png"];
        //   const nonImageFiles = response.data.fileList.filter(file => {
        //     const extension = file.fileName.slice(file.fileName.lastIndexOf('.')).toLowerCase(); // Get the file extension
        //     return !imageExtensions.includes(extension); // Filter out files with image extensions
        // });
          setAllTokens(response);
          console.log(allTokens);
          // console.log(response.data.fileList);
          
          
        // } else {
        //   console.error('Invalid response format:', response);
        // }
      } catch (error) {
        console.error('Error fetching uploads:', error);
        // Handle error accordingly
      }
    };

    fetchData();
  }, []);




  return (
    <div className='bg-slate-950'>
      {/* Navbar component */}
      <Navbar2 />
      
      <div className='flex justify-between px-9 py-8'>
        <div>
          <div className='text-green-600 font-semibold text-4xl'>Bull Street</div>
          <div className='text-neutral-400'>Find the best BullStreet.fun tokens and track latest migrations</div>
        </div>

        <div className='flex gap-5 items-center'>
          <div className='bg-slate-800 px-2 py-1 flex gap-3 items-center rounded text-sm cursor-pointer'>
            BUY <input type="search" className='rounded w-14 p-1 bg-slate-600 border-neutral-700 border' placeholder='0- $' />
          </div>

          <div className='bg-slate-800 p-2 flex gap-2 items-center rounded cursor-pointer hover:bg-green-700 text-sm'>
            <MdOutlineShowChart /> Advance
          </div>
        </div>
      </div>
      
      <div className='w-full flex items-center justify-center py-8'>
        <Link href='/Create'>
          <div className='text-center bg-green-600 px-4 py-3 w-30 rounded text-lg font-normal cursor-pointer hover:bg-green-700'>
            Start a new coin
          </div>
        </Link>
      </div>

      {/* Card Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5'>
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;