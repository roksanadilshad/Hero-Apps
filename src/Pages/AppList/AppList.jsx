import React, { useEffect, useState } from 'react';
import { loadDownload, removeFromList } from '../Utility/localStorage';
import Installed from '../Installed/Installed';
import { MdDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const AppList = () => {
    const [appList, setAppList] = useState([]);
    const [sort, setSort] = useState('none');

    useEffect(() =>{
        const savedList = JSON.parse(localStorage.getItem('appList')) || [];
        if(savedList){
          setAppList(savedList)
        } 
            
    },[])
            

    if(!appList.length) return <p>No Data Available</p>

   

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
        else if(sort === 'highrate'){
             return[...appList].sort((a,b)=> a.ratingAvg - b.ratingAvg);   
        }
        else if(sort === 'lowRate'){
             return[...appList].sort((a,b)=> a.ratingAvg - b.ratingAvg);   
        }
        else{
            return appList
        }
    })();

    console.log(sortedItem);
    

    
    return (
        <div>
           <div className='w-11/12 mx-auto text-center pb-40'>
             <h2 className='font-bold text-5xl'>Your Installed Apps</h2>
            <p className='text-xl/[32px] text-[#627382] m-2 pb-20'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center'>
                <p><b>({sortedItem.length})Apps found</b></p>
                <select defaultValue="Pick a color" className="select w-40"
                value={sort}
                onChange={e => setSort(e.target.value)}>
               <option value='none'>Sort by size</option>
               <option value='highValue' className='flex justify-around items-center p-1.5 text-[12px] rounded-xl text-[#00D390]'><MdDownload/> High-&gt;Low</option>
               <option value='lowValue' className='flex justify-around items-center p-1.5 text-[12px] rounded-xl text-[#00D390]'><MdDownload/>Low-&gt;High</option>
               <option value='highRate' className='flex justify-around items-center text-[12px] rounded-xl text-[#FF8811]'><FaStar/> Low-&gt;High</option>
               <option value='lowRate' className='flex justify-around items-center text-[12px] rounded-xl text-[#FF8811]'><FaStar/> Low-&gt;High</option>
             </select>
            </div>

            <div>
                {
                    sortedItem.map(app => <Installed onRemove={handleRemove} app={app} key={app.id}></Installed>)
                
                   
                 }
                
            </div>
            
           </div>
            
        </div>
    );
};

export default AppList;