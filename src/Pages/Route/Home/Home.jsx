import React, { useState } from 'react';
import Apps from '../../Apps/Apps';
//import { useLoaderData } from 'react-router';
import useApps from '../../hooks/useApps';
import Skeleton from '../../Skeleton/Skeleton';

const Home = () => {
  const {apps, loading} = useApps();
  const [showAll, setShowAll] = useState(false);
      // const apps = useLoaderData();
    //console.log(apps);

    
    //console.log(apps);
    
    
    
    const displayApps = showAll ? apps : apps.slice(0, 8);
    return (
      <div className='text-center flex justify-center items-center flex-col'>
           <h1 className='font-bold text-7xl/[84px]'>We Build <br />
         <span className='font-bold 
    bg-clip-text
     text-transparent
      bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2]'>Productive</span> Apps</h1>
       <p className='text-xl/[32px] text-[#627382] m-2'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
       
       <div className='flex justify-center items-center my-4'>

<a className='btn flex justify-center items-center border-[1] border-[#77777725] m-4'  href="https://play.google.com/store/games?hl=en"><img src="/src/assets/play-store.png" alt="" />Googe Play</a>
<a className='btn flex justify-center items-center border-[1] border-[#77777725] m-4' href="https://www.apple.com/app-store/"><img src="/src/assets/app-store.png" alt="" />App Store</a>

</div>

<div>
  <img src="/src/assets/hero.png" alt="" />
</div>
<div className=' bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2] py-6 px-40 w-full text-white mb-20'>
  <h2 className='font-bold text-5xl'>Trusted by Millions, Built for You</h2>
  <div className='flex justify-evenly items-center'>
    <div className='text-center py-10'>
    <p className='text-[14px]/[24px] pb-4 text-[#e9e4e4]'>Total Downloads</p>
    <h2 className='font-extrabold pb-4 text-[64px]/[72px]'>29.6M</h2>
    <p className='text-[14px]/[24px] text-[#e9e4e4]'>21% more than last month</p>
  </div>
  <div className='text-center py-10'>
    <p className='text-[14px]/[24px] pb-4 text-[#e9e4e4]'>Total Reviews</p>
    <h2 className='font-extrabold pb-4 text-[64px]/[72px]'>906K</h2>
    <p className='text-[14px]/[24px] text-[#e9e4e4]'>46% more than last month</p>
  </div>
  <div className='text-center py-10'>
    <p className='text-[14px]/[24px] pb-4 text-[#e9e4e4]'>Active Apps</p>
    <h2 className='font-extrabold pb-4 text-[64px]/[72px]'>132+</h2>
    <p className='text-[14px]/[24px] text-[#e9e4e4]'>31 more will Launch</p>
  </div>
  </div>
</div>

       <div>
             <h2 className='font-bold text-5xl text-[#001931]'>Trending Apps</h2>
              <p className='text-xl/[32px] text-[#627382] m-4'>Explore All Trending Apps on the Market developed by us</p>

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
          to-[#9F62F2] text-white m-20' onClick={() => setShowAll(!showAll)}>{showAll ? 'ShowLess' : "Show All"}</button>
              )
             }
      </div>
       </div>
    );
};

export default Home;