import React from 'react';
import { useNavigate } from 'react-router';

const ErrorApp = () => {
    const navigate = useNavigate()
    return (
        <div>
             <div className='flex justify-center items-center flex-col px-4'>
           <img src="https://i.ibb.co.com/hxVSZwpX/App-Error.png" alt="" />
           <h2 className='font-semibold text-5xl/[60px] px-2'>Oops, App not found!</h2>
           <p className='text-xl/[32px] text-[#627382] m-2'>The app you are looking for is not available.</p>
           <button onClick={() => navigate(0) || navigate('/')} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white m-2'>Go Back</button>
        </div>
        </div>
    );
};

export default ErrorApp;