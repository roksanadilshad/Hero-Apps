import React, {  useState } from 'react';
import App from '../App/App';
import Apps from '../Apps/Apps';
import useApps from '../hooks/useApps';
import ErrorPage from '../Route/ErrorPage/ErrorPage';
import ErrorApp from '../Route/ErrorPage/ErrorApp';
//import useApps from '../hooks/useApps';

const AppsWithTitle = () => {
    const {apps} = useApps();
    console.log(apps);
    
     const [search, setSearch] = useState('');
    
        const trem = search.trim().toLocaleLowerCase();
        const searchProducts =
            trem ? apps.filter(app => app.title.toLocaleLowerCase().includes(trem)) : apps;
        
    //if(!trem.length) return <ErrorApp></ErrorApp>
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
            <Apps searchProducts={searchProducts}></Apps>
        </div>
    );
};

export default AppsWithTitle;