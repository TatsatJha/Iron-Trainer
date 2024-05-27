import { useEffect, useState } from "react";
import Navbutton from "./Navbutton";
import { IoReorderThreeOutline } from "react-icons/io5";

    export default function Navbar() {
      const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

      useEffect(() => {
        window.addEventListener("resize", ()=>{setIsMobile(window.innerWidth < 600)}, false);
      }, [window.innerWidth])
      

      return (
        (isMobile) ? 
        <div className="flex top-0 fixed w-screen align-middle justify-between z-50 bg-white">
          <h1>
            <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
          </h1>
          <button className="px-6 h-fit my-auto py-2 bg-emerald-600 text-white rounded-lg m-2 font-bold"> Download App</button>
          <button className="text-3xl pr-6">
             <IoReorderThreeOutline></IoReorderThreeOutline>
          </button>
        </div>

        :

        <div className="top-0 fixed flex w-screen px-24 text-emerald-600 font-bold justify-between z-50 bg-white p-2 ">
          <h1>
            <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
          </h1>
          <nav className='flex justify-evenly text-xl'>
            <Navbutton to = "/" name ="Home" style={"p-4 px-8"}></Navbutton>
            <Navbutton to = "/my-programs" name ="My Programs" style={"p-4 px-8"}></Navbutton>
            <Navbutton to = "/discover" name ="Discover" style={"p-4 px-8"}></Navbutton>
            <button className="px-6 m-2 border-2 h-auto border-emerald-400 rounded-lg text-lg font-bold">Log in</button>
          </nav>
        </div>
         
      );
    }
  
  