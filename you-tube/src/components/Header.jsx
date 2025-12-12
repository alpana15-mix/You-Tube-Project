import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";

export default function Header({nav,navbar}){
    const [userPic, setUserPic]=useState("https://i.pinimg.com/236x/5a/bd/98/5abd985735a8fd4adcb0e795de6a1005.jpg")

const [model, setModel] =useState(false);

function handleClickmodel(){
    setModel(prev=>!prev);
}

function hambgur(){
nav(!navbar)
}
return(
<div className="h-14 box-border px-4 py-2 flex items-center w-full justify-between fixed top-0 bg-black z-10">
    <div className="flex gap-2.5 justify-center items-center w-fit">

<div onClick={hambgur} className="w-10 h-10 flex justify-center items-center cursor-pointer">

<GiHamburgerMenu className="text-white text-2xl"/>
</div>
<div className="flex justify-center items-center cursor-pointer no-underline">
    <BsYoutube className="text-3xl text-red-700"/>
    <div className="text-white text-[20px] tracking-normal font-normal font-Lilita One sans-serif">You
        <span className="text-red-700">Tube</span><sup className="text-white text-[10px]">IN</sup></div>
</div>
    </div>
{/*-----------------------Middle Part--------------------------*/}
<div className="flex gap-2.5 w-1/2">
<div className="flex w-4/5">
    <input type="text" placeholder="Search" 
    className="w-full h-10 rounded-tl-[20px] rounded-bl-[20px] border border-[#3A3939] bg-[#121212]
    text-white text-[16px] pl-[30px] focus:outline-none placeholder:text-[16px]"/>
    <div className="cursor-pointer w-[70px] border border-[#2A2A2A] bg-[#2A2A2A] flex justify-center 
    items-center rounded-tr-[20px] rounded-br-[20px]">
        <CiSearch className="text-white text-[28px]" />
        </div>
</div>
<div className="cursor-pointer flex justify-center items-center bg-[#2A2A2A] rounded-full w-10 h-10 ">
<IoMdMic className="text-white text-[22px]"/>
</div>
</div>


<div className="flex gap-5 justify-center items-center relative">
    <RiVideoAddFill  className="text-white text-[30px] cursor-pointer " />
    <IoIosNotifications className="text-white text-[30px] cursor-pointer "/>
    <img onClick={handleClickmodel} alt="logo" src={userPic} className="w-[30px] cursor-pointer rounded-full"/>
{model &&
    <div className="absolute top-[35px] w-full z-20 text-white">
<div className="bg-[#555] p-2.5 cursor-pointer hover:bg-[#222]">Profile</div>
<div className="bg-[#555] p-2.5 cursor-pointer hover:bg-[#222]">Logout</div>
<div className="bg-[#555] p-2.5 cursor-pointer hover:bg-[#222]">Login</div>

    </div>
}

</div>
</div>
)

}