import '../index.css' 
export default function HomePage({navbar}){
   
const Options = ["All","4K resolution","JavaScript","Data Structure","Mixes","Music","Movies","News","T-Series","Cartoons","Lives","Lakes","New to you","Blogs","Villages"]

    return(
       
        <div className={navbar?" nav  flex text-white flex-col overflow-x-auto flex-1 ml-[247px] min-h-screen":"nav flex text-white flex-col overflow-x-auto flex-1 ml-[77px] min-h-screen"}>
            <div className="flex nav shadow-md shadow-gray-700 text-white fixed top-15 z-1 w-full box-border gap-2.5 shrink-0 h-auto overflow-x-scroll bg-black">
{/*---------------------------------Options--------------------------------------------*/}
                {
                    Options.map((item,index)=>{
                        return(
                            <div key={index} className="flex shrink-0 h-[30px] px-2.5 py-px bg-[rgb(42,42,42)] text-white font-semibold rounded-[5px] items-center justify-center cursor-pointer hover:bg-[rgb(60,60,60) transition ]">
                                 {item}
                             </div>
                        );
                    })
                }
                    

                  
           
            </div>

            {/*-----------------------------Video_Part----------------------------*/}

<div className='main_home_page grid box-border bg-black gap-2.5 grid-cols-[384px_384px_384px] pt-[90px] pb-5'>

                <div className='you_tube_video flex flex-col box-border text-white no-underline cursor-pointer h-[316px] hover:scale-[1.02] transition-transform duration-200'>

                        <div className='thumnail relative box-border h-[216px]'>
                            <img src='https://tinypng.com/images/social/website.jpg' alt='thumnail' className='w-full h-full rounded-[10px]'/>
                            <div className='video-timing absolute bottom-0 right-0 w-auto px-0.5 py-px bg-[rgb(42,42,42)] rounded-[5px]'>
                                12:32
                            </div>

                        </div>
                        <div className='title-box '>
                            <div className='profile_image flex w-[50px] h-[50px] items-center justify-center'>
                                <img src='https://tinypng.com/images/social/website.jpg' alt='profile' className='thumnail_profile w-[80%] rounded-full object-cover'/>
                            </div>
                            <div className='video_title w-full p-[5px] box-border flex gap-3'>
                                <div className='title font-semibold text-sm leading-snug line-clamp-2'>User1</div>
                                 <div className='channel text-sm text-gray-400 mt-1'>User1</div>
                                  <div className='likes text-sm text-gray-400 mt-1'>User1</div>
                                   
                            </div>
                        </div>

                </div>

</div>

       
         </div>
            
    )
}