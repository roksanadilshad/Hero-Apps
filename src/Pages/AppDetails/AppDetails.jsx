import React from 'react';
import { MdDownload } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    //const {apps, loading} = useApps();
    const {id} = useParams();
    //console.log(id);
    const appId = parseInt(id);
    const detaile = useLoaderData();
    
    const singleApp = detaile.find(app => app.id === appId)
    //console.log(singleApp);
    

       const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = singleApp

    
    return (
        <div>
           <div className="card card-side bg-[#F5F5F5] shadow-sm w-11/12 mx-auto px-10">
  <figure className='w-[25%] py-10'>
    <img
      src={image} />
  </figure>
  <div className="pl-10 w-[75%]">
    <h2 className="card-title font-bold text-4xl py-4">{title}</h2>
    <p className='text-xl/[32px] pb-4'>Devlopted by <span className='bg-clip-text
     text-transparent
      bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2]'>{companyName}</span></p>
    <hr className='text-[#d4d2d2]'/>
    <div  className='flex justify-between w-[50%] items-start'>
        
            <div className=' py-10 flex flex-col gap-2 justify-center items-center'>
    <img src="/src/assets/icon-downloads.png" alt="" />
    <p className='text-[16px]/[24px] text-[#001931]'>Downloads</p>
    <h2 className='font-extrabold pb-4 text-[40px]/[40px]'>{downloads}M</h2>
  </div>
       
       
            <div className='text-center py-10 flex flex-col gap-2 justify-center items-center'>
    <img src="/src/assets/icon-ratings.png" alt="" />
    <p className='text-[16px]/[24px] text-[#001931]'>Average Ratings</p>
    <h2 className='font-extrabold pb-4 text-[40px]/[40px]'>{ratingAvg}M</h2>
  </div>
       
        
            <div className='text-center py-10 flex flex-col gap-2 justify-center items-center'>
    <img src="/src/assets/icon-review.png" alt="" />
    <p className='text-[16px]/[24px] text-[#001931]'>Total Reviews</p>
    <h2 className='font-extrabold pb-4 text-[40px]/[40px]'>{reviews}M</h2>
  </div>
        
    </div>
    <div className="card-actions">
      <button className="btn text-white btn-responsive bg-[#00D390]">Install Now ({size}) MB</button>
    </div>
  </div>
</div>


        </div>
    );
};

export default AppDetails;