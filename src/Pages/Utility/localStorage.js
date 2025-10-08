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

// install
export const loadInstall =() =>{
    try{
        const data = localStorage.getItem('installed')
        return data ? JSON.parse(data) : []
    }
    catch(err){
        console.log(err);
        return []

    }
}
// Install save
export const updateInstall =(app) =>{
    const installed = loadInstall();
    if(!installed.includes(app.id)){
        installed.push(app.id);
        localStorage.setItem('installed', JSON.stringify(installed));
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