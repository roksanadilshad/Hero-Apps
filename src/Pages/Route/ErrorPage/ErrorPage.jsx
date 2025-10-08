import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
       const navigate = useNavigate()
    return (
        <div className='flex justify-center items-center flex-col'>
           <img src="/src/assets/error-404.png" alt="" />
           <h2 className='font-semibold text-5xl/[60px]'>Oops, page not found!</h2>
           <p className='text-xl/[32px] text-[#627382] m-2'>The page you are looking for is not available.</p>
           <button onClick={() => navigate(-1) } className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white m-2'>Go Back</button>
        </div>
    );
};

export default ErrorPage;