import React, { useEffect, useState } from 'react';
import App from '../App/App';

const Apps = () => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('/app.json')
        .then(res => res.json())
        .then(data => setApps(data))
        .catch(err => console.error(err));

    }, [])

    return (
        <div>
            <div className='text-center'>
                <h2 className='font-bold text-5xl'>Our All Applications</h2>
                <p className='text-xl/[32px] text-[#627382] m-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
                   <div className='flex justify-between'>

                <p><b>() Apps Found</b></p>
                <input type="search" name="search" placeholder='🔍 Search Apps' id="" />
                   </div>
            </div>
            <div className='grid grid-cols-4 gap-5 w-11/12 mx-auto'>

           {
            apps.map(app=> <App app={app} key={app.id}></App>)
           }
            </div>
        </div>
    );
};

export default Apps;