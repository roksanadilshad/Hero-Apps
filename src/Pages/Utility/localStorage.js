import Swal from "sweetalert2";

// get
export const loadDownload =() =>{
    try{
        const data = localStorage.getItem('appList');
        const parsed = data ? JSON.parse(data) : [];
        return Array.isArray(parsed) ? parsed.filter(item => item && item.id) : []
    }
    catch(err){
        console.log(err);
        return []

    }
}
export const isInstalled = (id) =>{
    const currentList = loadDownload();
    return currentList.some(item => item.id === id)
};

// save add to list
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
          title: 'Installed',
          text: `${app.title} has been installed successfully.`,
        });
        
    }
    catch(err){
        console.log(err);
    }
}
// delete
export const removeFromList = (id) =>{
    const appList = loadDownload()
    try{

        const updateApplist = appList.filter(p => p.id !== id);
        localStorage.setItem('appList', JSON.stringify(updateApplist))
         Swal.fire({
      icon: 'success',
      title: 'Uninstalled',
      text: `Uninstalled successfully.`,
    });
        }
    
    catch(err){
        console.log(err);
    }
}

export {}