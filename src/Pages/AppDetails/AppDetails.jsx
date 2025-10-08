import React from 'react';
import { MdDownload } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
    //const {apps, loading} = useApps();
    const {id} = useParams();
    //console.log(id);
    const appId = parseInt(id);
    const detaile = useLoaderData();
    
    const singleApp = detaile.find(app => app.id === appId)
    //console.log(singleApp);
    

       const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = singleApp;

       

    
    return (
        <div>
           <div className="card card-side bg-[#F5F5F5] shadow-sm w-11/12 mx-auto px-10">
  <figure className='w-[25%] pb-10'>
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
{/* "ratings": [
      { "name": "1 star", "count": 550000 },
      { "name": "2 star", "count": 800000 },
      { "name": "3 star", "count": 1800000 },
      { "name": "4 star", "count": 5000000 },
      { "name": "5 star", "count": 30000000 } */}
{/* chat */}
<div className='w-full md:w-11/12 mx-auto mt-10'>
  

     <h3 className='font-semibold text-2xl/[32px]'><b>Ratings</b></h3>
    <div className='lg:w-full w-[50%] h-[500px] border-[1px] border-[#77777752] rounded-xl'>
      <ResponsiveContainer>
      <BarChart
        
        data={[...ratings]
          .sort((a, b) => parseInt(b.name) - parseInt(a.name))
          .map(rating => ({
        name: rating.name,
        count: rating.count
       }))}
        layout='vertical'
        margin={{
          top: 20,
          right: 30,
          left: 100,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type='number'/>
        <YAxis dataKey="name" type='category'/>
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#FF8811" barSize={25}  />
      </BarChart>
      </ResponsiveContainer>
    </div>
  
    
<p className=''><b>Description</b>{description}</p>
</div>
        </div>
    );
};

export default AppDetails;