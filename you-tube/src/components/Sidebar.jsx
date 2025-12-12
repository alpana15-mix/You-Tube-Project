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
export default function Sidebar({navbar}){
    return(
        <div className={navbar?"flex flex-col grow box-border h-[92vh] overflow-y-auto fixed top-[55px] left-0 w-[275px] p-3.5 bg-black text-white"
            :"hidden"}>
            {/*First container*/}
            <div className="flex flex-col border-b border-[#565555] pb-2.5">
                <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <AiFillHome className="" />
                    <div className="text-[14px] font-[450]">Home</div>

             </div>
             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <SiYoutubeshorts />
                    <div className="text-[14px] font-[450]">Shorts</div>

             </div>
             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdSubscriptions />
                    <div className="text-[14px] font-[450]">Subscription</div>

             </div>
            
            </div>

            {/*Second content*/}
<div className="flex flex-col border-b border-[#565555] py-2.5">
            <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                      <div className="text-[14px] font-[450]">You</div>
                    <FaAngleRight />
                   
            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdRecentActors />
                    <div className="text-[14px] font-[450]">Your Channel</div>

            </div>


            <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                     <GoHistory />
                    <div className="text-[14px] font-[450]">History</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlinePlaylistPlay />
                    <div className="text-[14px] font-[450]">Playlists</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlineOndemandVideo />
                    <div className="text-[14px] font-[450]">Your videos</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdOutlineWatchLater />
                    <div className="text-[14px] font-[450]">Watch latter</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <SlLike />
                    <div className="text-[14px] font-[450]">Liked videos</div>

            </div>

             <div className="flex gap-5 items-center py-[9px] px-2.5 rounded-[15px] cursor-pointer hover:bg-[#232323] transition-colors duration-200">
                    <MdContentCut />
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

 </div>
    )
}