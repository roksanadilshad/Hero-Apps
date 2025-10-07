import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const App = ({app}) => {
    //console.log(app);
    const {image, title, downloads, ratingAvg} = app;
    
    return (
        <div>
            <div className='flex justify-center items-center flex-col p-4 rounded-xl bg-white'>

            <img src={image} alt="" className='w-[50%]'/>
            <h3 className='font-medium text-xl pt-4'>{title}</h3>
            <div className='flex justify-between items-center pt-4  rounded-xl w-full'>
            <p  className='flex justify-around items-center p-1.5 text-[12px] rounded-xl text-[#00D390] bg-[#F1F5E8]'> <MdDownload></MdDownload> {downloads}M</p>
            <p className='flex justify-around items-center p-1.5 text-[12px] rounded-xl text-[#FF8811] bg-[#FFF0E1]'><FaStar></FaStar> {ratingAvg}</p>
            </div>
            </div>
        </div>
    );
};

export default App;