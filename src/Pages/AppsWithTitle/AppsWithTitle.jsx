import React, {  useState } from 'react';
import App from '../App/App';
import Apps from '../Apps/Apps';
import useApps from '../hooks/useApps';
import ErrorPage from '../Route/ErrorPage/ErrorPage';
import ErrorApp from '../Route/ErrorPage/ErrorApp';
import Skeleton from '../Skeleton/Skeleton';
import Loader from '../Skeleton/Loader';
//import useApps from '../hooks/useApps';

const AppsWithTitle = () => {
    const {apps} = useApps();
    //console.log(apps);
    
     const [search, setSearch] = useState('');
       

        const trim = search.trim().toLocaleLowerCase();
        const searchProducts =
            trim ? apps.filter(app => app.title.toLocaleLowerCase().includes(trim)) : apps;
        
    
    // console.log(searchProducts);
    
    
    return (
        <div>
            <div className='text-center w-11/12 mx-auto'>
                <h2 className='font-bold text-3xl lg:text-5xl'>Our All Applications</h2>
                <p className='lg:text-xl/[32px] text-[12px] text-[#627382] m-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                   <div className='flex justify-between lg:pb-4'>

                <p><b>({searchProducts.length}) Apps Found</b></p>
                <input 
                onChange={e => setSearch(e.target.value)} value={search} type="search" name="search" placeholder='🔍 Search Apps' className='lg:p-2 px-1 rounded-xl border-[1px] border-[#7777776c]' />
               
                   </div>
            </div>
            <div className='lg:pb-40 pb-5'>

             {
                     searchProducts.length > 0 ? (
                            
                        <Apps searchProducts={searchProducts}></Apps>
                    ) : (<ErrorApp></ErrorApp>)
                }
            </div>
        </div>
    );
};

export default AppsWithTitle;