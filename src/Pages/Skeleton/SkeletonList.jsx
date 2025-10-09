import React from 'react';

const SkeletonList = (count = 5) => {
    return (
        <div>
            {Array.from({length: count }).map((_, i) => 
            
            <div key={i} className="skeleton flex justify-between w-96  gap-4">
  <div className="flex items-center  gap-4">
    <div className="skeleton h-16 w-16 shrink-0 rounded-2xl"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
    </div>
  </div>
  <div className="skeleton h-4 w-28"></div>
</div>
            )}
        </div>
    );
};

export default SkeletonList;