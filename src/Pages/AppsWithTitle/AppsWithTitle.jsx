import React, {  useEffect, useState } from 'react';
import App from '../App/App';
import Apps from '../Apps/Apps';
import useApps from '../hooks/useApps';
import ErrorPage from '../Route/ErrorPage/ErrorPage';
import ErrorApp from '../Route/ErrorPage/ErrorApp';
import Skeleton from '../Skeleton/Skeleton';
import Loader from '../Skeleton/Loader';
//import useApps from '../hooks/useApps';

const AppsWithTitle = () => {
    const {apps, loading} = useApps();
    //console.log(apps)
    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);
    const [filteredApps, setFilteredApps] = useState(apps);

    useEffect(() =>{
        if(loading) return;
        setSearching(true);
        const delay = setTimeout(() =>{
            const trem = search.trim().toLocaleLowerCase();
            const searchProducts = trem ? apps.filter(app => app.title.toLocaleLowerCase().includes(trem)) : apps;
            setFilteredApps(searchProducts);
            setSearching(false);
        }, 600);
        return ()=> clearTimeout(delay);
    }, [search, apps, loading]);
    // console.log(filteredApps);
    
    
    return (
        <div>
            <div className='text-center w-11/12 mx-auto'>
                <h2 className='font-bold text-3xl lg:text-5xl'>Our All Applications</h2>
                <p className='lg:text-xl/[32px] text-[12px] text-[#627382] m-2 pb-4'>Explore All Apps on the Market developed by us. We code for Millions</p>
                   <div className='flex justify-between pb-4'>

                <p><b>({filteredApps.length}) Apps Found</b></p>
                <input 
                onChange={e => setSearch(e.target.value)} 
                value={search} type="search" name="search" 
                placeholder='🔍 Search Apps' 
                className='lg:p-2 px-1 rounded-xl border-[1px] border-[#7777776c]' />
               
                   </div>
            </div>
            <div className=' pb-5 min-h-screen'>

             {
                    loading || searching ? (
                        <Skeleton count={filteredApps.length}></Skeleton>
                    ): (
                         filteredApps.length > 0 ? (
                            
                        <Apps filteredApps={filteredApps}></Apps>
                    ) : (<ErrorApp></ErrorApp>)
                    )
                }
            </div>
        </div>
    );
};

export default AppsWithTitle;