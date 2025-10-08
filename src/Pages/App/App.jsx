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
            <div className='flex justify-center items-center flex-col p-4 rounded-xl bg-white'>

            <img src={image} alt="" className='w-[50%]'/>
            <h3 className='font-medium text-xl pt-4'>{title}</h3>
            <div className='flex justify-between items-center pt-4  rounded-xl w-full'>
            <button className='flex justify-around items-center p-1.5 text-[12px] rounded-xl text-[#00D390] bg-[#F1F5E8]'> <MdDownload></MdDownload> {downloads}M</button>
            <p className='flex justify-around items-center p-1.5 text-[12px] rounded-xl text-[#FF8811] bg-[#FFF0E1]'><FaStar></FaStar> {ratingAvg}</p>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default App;