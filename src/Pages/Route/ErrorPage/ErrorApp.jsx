import React from 'react';
import { useNavigate } from 'react-router';

const ErrorApp = () => {
    const navigate = useNavigate();

     const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
    return (
        <div>
             <div className='flex justify-center items-center flex-col'>
           <img src="/src/assets/App-Error.png" alt="" />
           <h2 className='font-semibold text-5xl/[60px]'>Oops, App not found!</h2>
           <p className='text-xl/[32px] text-[#627382] m-2'>The page you are looking for is not available.</p>
           <button onClick={handleGoBack} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white m-2'>Go Back</button>
        </div>
        </div>
    );
};

export default ErrorApp;