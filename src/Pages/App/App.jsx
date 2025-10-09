import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { Link } from 'react-router';

const App = ({app}) => {
    //console.log(app);
    const {image, title, downloads, ratingAvg, id} = app;
    
    return (
        <div>
            <Link to={`/appDetails/${id}`}>
            <div className='flex justify-center items-center flex-col lg:p-4 p-2 rounded-xl bg-white shadow-sm h-full'>

            <img src={image} alt="" className='w-[50%]'/>
            <h3 className='font-medium lg:text-xl text-[18px] lg:pt-4 pt-2'>{title}</h3>
            <div className='flex justify-between items-center lg:pt-4 pt-2  rounded-xl w-full'>
            <p className='flex justify-around items-center lg:p-1.5 p-0.5 lg:text-[12px] text-[10px] rounded-xl text-[#00D390] bg-[#F1F5E8]'> <MdDownload></MdDownload> {downloads}M</p>
            <p className='flex justify-around items-center lg:p-1.5 p-0.5 lg:text-[12px] text-[10px] rounded-xl text-[#FF8811] bg-[#FFF0E1]'><FaStar></FaStar> {ratingAvg}</p>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default App;