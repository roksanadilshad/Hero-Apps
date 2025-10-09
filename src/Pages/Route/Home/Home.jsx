import React, { useState } from 'react';
import Apps from '../../Apps/Apps';
//import { useLoaderData } from 'react-router';
import useApps from '../../hooks/useApps';
import Skeleton from '../../Skeleton/Skeleton';
import Loader from '../../Skeleton/Loader';

const Home = () => {
  const {apps, loading} = useApps();
  const [showAll, setShowAll] = useState(false);
    //console.log(apps);
    
    const displayApps = showAll ? apps : apps.slice(0, 8);
    return (
      <>
     { loading ? (<Loader></Loader> ):(

      <div className='text-center flex justify-center items-center flex-col'>
           <h1 className='font-bold text-5xl/[48px] lg:text-7xl/[84px]'>We Build <br />
         <span className='font-bold 
    bg-clip-text
     text-transparent
      bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2]'>Productive</span> Apps</h1>
       <p className='lg:text-xl/[32px]  text-[14px]/[20px] text-[#627382] m-2'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
       
       <div className='flex justify-center items-center my-4'>

<a className='btn flex justify-center items-center border-[1] border-[#77777725] m-4'  href="https://play.google.com/store/games?hl=en">
<img src="https://i.ibb.co.com/qLYsvhWv/play-store.png" alt="" />Googe Play</a>
<a className='btn flex justify-center items-center border-[1] border-[#77777725] m-4' href="https://www.apple.com/app-store/">
<img src="https://i.ibb.co.com/67CqVVS1/app-store.png" alt="" />App Store</a>

</div>

<div>
  <img src="https://i.ibb.co.com/DfKh1PC5/hero.png" alt="" />
</div>
<div className=' bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2] lg:py-6 py-1 lg:px-40 w-full text-white mb-8 lg:mb-20'>
  <h2 className='font-bold lg:text-5xl text-2xl'>Trusted by Millions, Built for You</h2>
  <div className='flex justify-evenly items-center'>
    <div className='text-center py-2 lg:py-10'>
    <p className='lg:text-[14px]/[24px] text-[12px] pb-1 text-[#e9e4e4]'>Total Downloads</p>
    <h2 className='lg:font-extrabold font-bold lg:pb-4 pb-1 text-xl/[20px] lg:text-[64px]/[72px]'>29.6M</h2>
    <p className='lg:text-[14px]/[24px] text-[12px] text-[#e9e4e4]'>21% more than last month</p>
  </div>
  <div className='text-center py-2 lg:py-10'>
    <p className='lg:text-[14px]/[24px] text-[12px] pb-1 text-[#e9e4e4]'>Total Reviews</p>
    <h2 className='lg:font-extrabold font-bold lg:pb-4 pb-1 text-xl/[20px] lg:text-[64px]/[72px]'>906K</h2>
    <p className='lg:text-[14px]/[24px] text-[12px] text-[#e9e4e4]'>46% more than last month</p>
  </div>
  <div className='text-center py-2 lg:py-10'>
    <p className='lg:text-[14px]/[24px] text-[12px] pb-1 text-[#e9e4e4]'>Active Apps</p>
    <h2 className='lg:font-extrabold font-bold lg:pb-4 pb-1 text-xl/[20px] lg:text-[64px]/[72px]'>132+</h2>
    <p className='lg:text-[14px]/[24px] text-[12px] text-[#e9e4e4]'>31 more will Launch</p>
  </div>
  </div>
</div>

       <div>
             <h2 className='font-bold text-3xl lg:text-5xl text-[#001931]'>Trending Apps</h2>
              <p className='lg:text-xl/[32px] text-[12px] text-[#627382] lg:m-4 m-1'>Explore All Trending Apps on the Market developed by us</p>

              {
                loading? (
                  <Skeleton></Skeleton>
                ):(

                  <Apps apps={displayApps || []}></Apps>
                )
              }
             
             {
              apps.length > 8 && (

                <button className='btn bg-gradient-to-r 
         from-[#632EE3]
          to-[#9F62F2] text-white m-5 lg:m-20' onClick={() => setShowAll(!showAll)}>{showAll ? 'ShowLess' : "Show All"}</button>
              )
             }
      </div>
       </div>
      )}
      </>
    );
};

export default Home;