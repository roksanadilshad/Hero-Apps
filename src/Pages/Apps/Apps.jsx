//import { useEffect, useState } from 'react';
import App from '../App/App';
import Skeleton from '../Skeleton/Skeleton';
import useApps from '../hooks/useApps';
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
  
const {loading} = useApps();

const displayApps = searchProducts.length > 0 ? searchProducts : apps;

    return (
        <div>
            {loading ? (
                    <Skeleton count={16}></Skeleton>
                ):( <div className='grid lg:grid-cols-4 grid-cols-2 gap-5 w-11/12 mx-auto lg:pb-10 pt-4 md:pb-10'>
            {  
                    displayApps.map(app=> <App app={app} key={app.id}></App>)
            }
            </div>)}
           

         
           
        </div>
    );
};

export default Apps;