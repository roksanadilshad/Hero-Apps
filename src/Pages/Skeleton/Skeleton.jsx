import React from 'react';

const Skeleton = ({count = 6}) => {
    return (
        <div className='grid grid-cols-4 gap-5 w-11/12 mx-auto'>
           {Array.from({length: count }).map((_, i) => (

            <div key={i} className="flex w-full flex-col gap-4">
  <div className="skeleton h-28 w-full"></div>
  <div className="skeleton h-4 w-[50%]"></div>
  <div className='flex justify-between'>
  <div className="skeleton h-4 w-[20%]"></div>
  <div className="skeleton h-4 w-[20%]"></div>
  </div>
</div>
           ))} 

            </div>
        
    );
};

export default Skeleton;