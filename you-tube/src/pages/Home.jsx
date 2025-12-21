import HomePage from "../components/HomePage";
import Sidebar from "../components/Sidebar";
import '../index.css' 

export default function Home({navbar}){
return(
    <div className="flex w-full px-0 pt-2.5 pb-0 box-border">
        <Sidebar navbar={navbar}/>
        <HomePage navbar={navbar}/>
    </div>
)
}