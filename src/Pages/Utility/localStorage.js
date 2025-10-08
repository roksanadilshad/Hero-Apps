import Swal from "sweetalert2";

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
                Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "This App is already in your list!",
  footer: '<a href="#">Why do I have this issue?</a>'
  });
  return;
            
        }
        const updateApplist = [...appList, app]
        localStorage.setItem('appList', JSON.stringify(updateApplist))
        Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${app.title} has been added successfully.`,
    });
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