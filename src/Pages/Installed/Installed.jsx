
import { removeFromList } from '../Utility/localStorage';
import { FaStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';

const Installed = ({app, onRemove}) => { 

      const handleRemove =(id) =>{
    removeFromList(id)
    onRemove(id)
  }

    return (
        <div className=' flex justify-between items-center p-4 bg-white my-4 rounded-xl'>
            <div className='flex justify-between items-center lg:gap-5 gap-2'>

         <img className='w-[60px]' src={app.image} alt="" />
             <div >
                 <h4 className='card-title'>{app.title}</h4>
                 <div className='flex justify-between items-center lg:gap-5 gap-1'>
                        <p className='flex justify-around items-center text-[12px] rounded-xl text-[#00D390]'><MdDownload className='mr-1'></MdDownload>{app.downloads}M</p>
                     <p className='flex justify-around items-center text-[12px] rounded-xl text-[#FF8811]'><FaStar className='mr-1'></FaStar>{app.ratingAvg}</p>
                 <p className='lg:text-[14px]/[32px] text-[12px] text-[#627382] m-2'>{app.size}MB</p>
                        </div>
                </div>
            </div>
               <button className="btn text-white lg:btn-responsive bg-[#00D390]" onClick={() => handleRemove(app.id)}>Uninstall</button>


        </div>
        
    );
};

export default Installed;