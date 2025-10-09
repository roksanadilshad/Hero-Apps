import React, { useEffect, useState } from 'react';
import { MdDownload } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadInstall, updateInstall, updateList } from '../Utility/localStorage';

// import useApps from '../hooks/useApps';

const AppDetails = () => {
    // const {apps, loading} = useApps();
    // console.log(apps);
    
    const {id} = useParams();
    //console.log(id);
    const appId = parseInt(id);
    const detaile = useLoaderData();
     const [installed, setInstalled] = useState(true);
    
    const singleApp = detaile.find(app => app.id === appId)
    //console.log(singleApp);
        
      useEffect(() =>{
         const installedApps = loadInstall();
         const parseData = installedApps.map(id => parseInt(id))
          const faltu = parseData.includes(singleApp.id)
         setInstalled(faltu)
}, [appId])
      
       const handleInstall = () =>{
        updateInstall(singleApp)
        updateList(singleApp);
        setInstalled(true);
       }

       const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = singleApp || {};

      
      
    return (
        <div>
           <div className="lg:flex items-center lg:justify-between bg-[#F5F5F5] shadow-sm w-11/12 mx-auto flex-col lg:flex-row lg:px-10 lg:text-left text-center p-5">
  
    <img className='w-60 h-full lg:pb-10 mx-auto'
      src={image} />
  
  <div className="lg:pl-10 lg:w-[75%] w-full mx-auto">
    <h2 className=" font-bold lg:text-4xl text-2xl lg:py-4 py-2">{title}</h2>
    <p className='lg:text-xl/[32px] text[14px] lg:pb-4 pb-3'>Devlopted by <span className='bg-clip-text
     text-transparent
      bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2]'>{companyName}</span></p>
    <hr className='text-[#d4d2d2]'/>
    <div  className='flex justify-between lg:w-[50%] items-start lg:mx-0 mx-auto'>
        
            <div className=' lg:py-10 py-5 flex flex-col gap-2 justify-center items-center'>
    <img src="/src/assets/icon-downloads.png" alt="" />
    <p className='lg:text-[16px]/[24px] text-[12px] text-[#001931]'>Downloads</p>
    <h2 className='font-extrabold lg:pb-4 pb-2 lg:text-[40px]/[40px] text-3xl/[20px]'>{downloads}M</h2>
  </div>
       
       
            <div className='text-center lg:py-10 py-5 flex flex-col gap-2 justify-center items-center'>
    <img src="/src/assets/icon-ratings.png" alt="" />
    <p className='lg:text-[16px]/[24px] text-[12px] text-[#001931]'>Average Ratings</p>
    <h2 className='font-extrabold lg:pb-4 pb-2 lg:text-[40px]/[40px] text-3xl/[20px]'>{ratingAvg}M</h2>
  </div>
       
        
            <div className='text-center lg:py-10 py-5 flex flex-col gap-2 justify-center items-center'>
    <img src="/src/assets/icon-review.png" alt="" />
    <p className='lg:text-[16px]/[24px] text-[12px] text-[#001931]'>Total Reviews</p>
    <h2 className='font-extrabold lg:pb-4 pb-2 lg:text-[40px]/[40px] text-3xl/[20px]'>{reviews}M</h2>
  </div>
        
    </div>
    <div className="">
      <button onClick={handleInstall} className="btn text-white btn-responsive bg-[#00D390]">{ installed ? 'Installed' : `Install Now (${size}) MB`}</button>
    </div>
  </div>
</div>

<div className='w-full md:w-11/12 mx-auto mt-3 lg:mt-10'>
  

     <h3 className='font-semibold text-2xl/[32px] py-3 lg:text-left text-center'><b>Ratings</b></h3>
    <div className='lg:w-full w-full h-[500px] border-[1px] border-[#77777752] rounded-xl'>
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
          left: 10,
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
  
    
<p className='pt-10  text-[#777777d3] pb-4 text-xl/[32px]'><b className='text-black'>Description: </b> {description}</p>
</div>
        </div>
    );
};

export default AppDetails;