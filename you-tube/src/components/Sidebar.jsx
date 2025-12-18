import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { MdRecentActors } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { MdContentCut } from "react-icons/md";
import '../index.css' 
export default function Sidebar({navbar}){
    return(
       <>{navbar? <div className="sidebar shadow-[4px_0_10px_rgba(0,0,0,0.9)] flex flex-col grow box-border h-[92vh] overflow-y-auto fixed top-[55px] left-0 w-[260px] p-3.5 bg-black text-white"
            >
            {/*First container*/}
            <div className="flex flex-col border-b border-[#7e5959] pb-2.5">
                <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <AiFillHome className="text-2xl" />
                    <div className="text-[14px] font-[450]">Home</div>

             </div>
             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <SiYoutubeshorts className="text-2xl"/>
                    <div className="text-[14px] font-[450]">Shorts</div>

             </div>
             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdSubscriptions className="text-2xl"/>
                    <div className="text-[14px] font-[450]">Subscription</div>

             </div>
            
            </div>

            {/*Second content*/}
<div className="flex flex-col border-b border-[#565555] py-2.5">
            <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                      <div className="text-[14px] font-[450]">You</div>
                    <FaAngleRight className="text-2xl"/>
                   
            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdRecentActors className="text-2xl" />
                    <div className="text-[14px] font-[450]">Your Channel</div>

            </div>


            <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                     <GoHistory className="text-2xl"/>
                    <div className="text-[14px] font-[450]">History</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlinePlaylistPlay className="text-2xl"/>
                    <div className="text-[14px] font-[450]">Playlists</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlineOndemandVideo className="text-2xl" />
                    <div className="text-[14px] font-[450]">Your videos</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlineWatchLater className="text-2xl" />
                    <div className="text-[14px] font-[450]">Watch latter</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <SlLike className="text-2xl" />
                    <div className="text-[14px] font-[450]">Liked videos</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdContentCut className="text-2xl"/>
                    <div className="text-[14px] font-[450]">Your clips</div>

            </div>


 </div>

            {/*Third content*/}
      
            <div className="flex flex-col border-b border-[#565555] py-2.5">

                <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <div className="font-semibold">Subscription</div>
                </div>

                <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <img className="w-[25px] h-[25px] rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png"/>
                    <div className="text-[14px] font-[450]">Aaj Tak</div>
                </div>

                 <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <img className="w-[25px] h-[25px] rounded-full" src="https://pixelz.cc/wp-content/uploads/2018/11/t-series-logo-uhd-4k-wallpaper.jpg"/>
                    <div className="text-[14px] font-[450]">Tseries</div>
                </div>

                 <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <img className="w-[25px] h-[25px] rounded-full" src="https://www.citypng.com/public/uploads/preview/tom-and-jerry-logo-text-with-characters-png-701751694789228p8fae0qfhn.png"/>
                    <div className="text-[14px] font-[450]">Tom&Jarry</div>
                </div>

            </div>

 </div>:
 
 <div className="flex shadow-[4px_0_10px_rgba(0,0,0,0.9)] flex-col grow box-border h-[92vh] overflow-y-auto fixed top-[55px] left-0 w-[90px] p-3.5 bg-black text-white"
            >
            {/*First container*/}
            <div className="sidebar flex flex-col border-b border-[#7e5959] pb-2.5">
                <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <AiFillHome className="text-2xl" />
                    

             </div>
             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <SiYoutubeshorts className="text-2xl"/>
                    

             </div>
             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdSubscriptions className="text-2xl"/>
                    

             </div>
            
            </div>

            {/*Second content*/}
<div className="flex flex-col border-b border-[#565555] py-2.5">
            <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                      
                    <FaAngleRight className="text-2xl"/>
                   
            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdRecentActors className="text-2xl"/>
                    

            </div>


            <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                     <GoHistory className="text-2xl"/>
                    

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlinePlaylistPlay className="text-2xl"/>
                    

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlineOndemandVideo className="text-2xl"/>
                    

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlineWatchLater className="text-2xl"/>
                

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <SlLike className="text-2xl" />
                    

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdContentCut className="text-2xl"/>
                    

            </div>


 </div>

            

 </div>}</>
    )
}