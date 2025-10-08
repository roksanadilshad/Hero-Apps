import React, {  useState } from 'react';
import App from '../App/App';
import Apps from '../Apps/Apps';
import useApps from '../hooks/useApps';
import ErrorPage from '../Route/ErrorPage/ErrorPage';
import ErrorApp from '../Route/ErrorPage/ErrorApp';
import Skeleton from '../Skeleton/Skeleton';
//import useApps from '../hooks/useApps';

const AppsWithTitle = () => {
    const {apps, loading} = useApps();
    //console.log(apps);
    
     const [search, setSearch] = useState('');
    
        const trem = search.trim().toLocaleLowerCase();
        const searchProducts =
            trem ? apps.filter(app => app.title.toLocaleLowerCase().includes(trem)) : apps;
        
    if(!trem.length) return (
        <div className='flex justify-center items-center flex-col'>
           <img src="/src/assets/App-Error.png" alt="" />
           <h2 className='font-semibold text-5xl/[60px]'>Oops, App not found!</h2>
           <p className='text-xl/[32px] text-[#627382] m-2'>The page you are looking for is not available.</p>
           <button onClick={''} className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white m-2'>Go Back</button>
        </div>
    )
    // console.log(searchProducts);
    
    
    return (
        <div>
            <div className='text-center w-11/12 mx-auto'>
                <h2 className='font-bold text-5xl'>Our All Applications</h2>
                <p className='text-xl/[32px] text-[#627382] m-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                   <div className='flex justify-between pb-4'>

                <p><b>({searchProducts.length}) Apps Found</b></p>
                <input 
                onChange={e => setSearch(e.target.value)} value={search} type="search" name="search" placeholder='🔍 Search Apps' className='p-2 rounded-xl border-[1px] border-[#7777776c]' />
               
                   </div>
            </div>
             {
                    loading ? (<Skeleton></Skeleton> ):(
                            
                        <Apps searchProducts={searchProducts}></Apps>
                    )
                }
        </div>
    );
};

export default AppsWithTitle;