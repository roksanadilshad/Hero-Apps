import { useEffect, useState } from "react"



const useApps = () =>{
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const[ error, setError] = useState(null);

    // useEffect(() => {
    //     setLoading(true)
    //     axios('/app.json')
    //     .then(data => setApps(data.data))
    //     .catch(err => setError(err))
    //     .finally(() => setLoading(false))
    // }, [])

     useEffect(() => {
        setLoading(true)
            fetch('/app.json')
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => setError(err));
            
        }, [])
    console.log(apps);
    
    return {apps, loading, error}
}

export default useApps