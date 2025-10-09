import React from 'react';
import { DNA } from 'react-loader-spinner';

const DNAloder = () => {
    return (
        <div>
             <div className="flex justify-center items-center h-full">
                        <div className='flex flex-col items-center'>
            
                        <h2 className='text-4xl text-center font-bold'>No App Installed Yet</h2>
            
                        <DNA 
                  visible={true}
                  height="300"
                  width="300"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                  />
                        </div>
                    </div>
        </div>
    );
};

export default DNAloder;