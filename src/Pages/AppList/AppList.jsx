import React, { useEffect, useState } from 'react';
import { removeFromList } from '../Utility/localStorage';
import Installed from '../Installed/Installed';
import { MdDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import useApps from '../hooks/useApps';
import SkeletonList from '../Skeleton/SkeletonList';
import { DNA } from 'react-loader-spinner';
import DNAloder from '../Skeleton/DNAloder';

const AppList = () => {
    const [appList, setAppList] = useState([]);
    const [sort, setSort] = useState('none');
    const {loading} = useApps()
    useEffect(() =>{
        const savedList = JSON.parse(localStorage.getItem('appList')) || [];
        if(savedList){
          setAppList(savedList)
        } 
            
    },[])
            


   

     const handleRemove = id =>{
        setAppList(prev => prev.filter(app => app.id !== id))
        removeFromList(id)
     }

   const sortedItem = (() => {
        if(sort === 'highValue'){
            return[...appList].sort((a,b)=> b.downloads - a.downloads)
        }
        else if(sort === 'lowValue'){
             return[...appList].sort((a,b)=> a.downloads - b.downloads);   
        }
        else{
            return appList
        }
    })();

    //console.log(sortedItem);
    

    
    return (
        <div>
           <div className='w-11/12 mx-auto text-center pb-40 min-h-120'>
             <h2 className='font-bold text-3xl lg:text-5xl'> My Installation</h2>
            <p className='lg:text-xl/[32px] text-[14px] text-[#627382] m-2 pb-5 lg:pb-20'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center'>
                <p><b>({sortedItem.length})Apps found</b></p>
                <select className="select w-40"
                value={sort}
                onChange={e => setSort(e.target.value)}>
               <option value='none'>Sort by size</option>
               <option value='highValue' className=' p-1.5 text-[12px] rounded-xl text-[#00D390]'>High-&gt;Low</option>
               <option value='lowValue' className=' p-1.5 text-[12px] rounded-xl text-[#00D390]'>Low-&gt;High</option>
             </select>
            </div>

            {
                loading ? ( <SkeletonList count={sortedItem.length}></SkeletonList>) : sortedItem.length > 0 ? (
                    <div className='min-h-120'>
                {
                    sortedItem.map(app => <Installed onRemove={handleRemove} app={app} key={app.id}></Installed>)
                }
                
            </div>
        ): (
            <DNAloder></DNAloder>
        )
            }
            
           </div>
            
        </div>
    );
};

export default AppList;