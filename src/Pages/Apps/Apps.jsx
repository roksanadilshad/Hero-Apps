//import { useEffect, useState } from 'react';
import App from '../App/App';
//import useApps from '../hooks/useApps';


const Apps = ({searchProducts = [], apps = []}) => {
    // const [apps, setApps] = useState([]);
   
    // useEffect(() => {
    //     fetch('/app.json')
    //     .then(res => res.json())
    //     .then(data => setApps(data))
    //     .catch(err => console.error(err));
        
    // }, [])

     //const {apps} = useApps();
     //console.log(apps);

    

// console.log(searchProducts);


    return (
        <div>
            <div className='grid grid-cols-4 gap-5 w-11/12 mx-auto'>

           {
            searchProducts.map(app=> <App app={app} key={app.id}></App>)
           }
           {
            apps.map(app=> <App app={app} key={app.id}></App>)
           }
            </div>
        </div>
    );
};

export default Apps;