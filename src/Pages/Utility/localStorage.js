// get
export const loadDownload =() =>{
    try{
        const data = localStorage.getItem('appList')
        return data ? JSON.parse(data) : []
    }
    catch(err){
        console.log(err);
        return []

    }
}
// save
export const updateList = app =>{
    const appList = loadDownload()
    try{
        const isDuplicate = appList.some(p => p.id === app.id)
        if(isDuplicate){
            return alert('Already added..');
        }
        const updateApplist = [...appList, app]
        localStorage.setItem('appList', JSON.stringify(updateApplist))
    }
    catch(err){
        console.log(err);
    }
}
// delete
export const removeFromList = id =>{
    const appList = loadDownload()
    try{

        const updateApplist = appList.filter(p => p.id !== id);
        localStorage.setItem('appList', JSON.stringify(updateApplist))
        }
    
    catch(err){
        console.log(err);
    }
}

export {}