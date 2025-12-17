import '../index.css' 
export default function HomePage({navbar}){
   
const Options = ["All","4K resolution","JavaScript","Data Structure","Mixes","Music","Movies","News","T-Series","Cartoons","Lives","Lakes","New to you","Blogs","Villages"]

    return(
       
        <div className={navbar?" nav flex text-white flex-col overflow-x-auto flex-1 ml-[247px] min-h-screen":"nav flex text-white flex-col overflow-x-auto flex-1 ml-[77px] min-h-screen"}>
            <div className="flex nav text-white fixed top-15 z-1 w-full box-border gap-2.5 shrink-0 h-auto overflow-x-scroll bg-black">
{/*---------------------------------Options--------------------------------------------*/}
                {
                    Options.map((item,index)=>{
                        return(
                            <div key={index} className="flex shrink-0 h-[30px] px-2.5 py-px bg-[rgb(42,42,42)] text-white font-semibold rounded-[5px] items-center justify-center cursor-pointer hover:bg-[rgb(60,60,60) transition]">
                                 {item}
                             </div>
                        );
                    })
                }
                    

                  
           
            </div>
       
         </div>
            
    )
}