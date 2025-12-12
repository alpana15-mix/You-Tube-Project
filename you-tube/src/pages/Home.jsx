import HomePage from "../components/HomePage";
import Sidebar from "../components/Sidebar";

export default function Home({navbar}){
return(
    <div className="flex w-full px-[13px] pt-2.5 pb-0 box-border">
        <Sidebar navbar={navbar}/>
        <HomePage/>
    </div>
)
}