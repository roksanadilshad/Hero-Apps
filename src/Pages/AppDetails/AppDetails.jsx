import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    //const {apps, loading} = useApps();
    const {id} = useParams();
    //console.log(id);
    const detaile = useLoaderData();
    //console.log(detaile);
    
    
    //console.log(apps);


    
    return (
        <div>
            <h2>ujydgfhf</h2>
        </div>
    );
};

export default AppDetails;