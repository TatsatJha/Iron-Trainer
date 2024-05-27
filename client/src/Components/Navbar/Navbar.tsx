import { useEffect, useState } from "react";
import Navbutton from "./Navbutton";

    export default function Navbar() {
      const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

      useEffect(() => {
        window.addEventListener("resize", ()=>{setIsMobile(window.innerWidth < 600)}, false);
      }, [window.innerWidth])
      

      return (
        (isMobile) ? 
        <div className="flex top-0 fixed w-screen justify-end z-50 bg-white">
          <button className="p-4 bg-emerald-600 text-emerald-900 rounded-lg m-4 bold"> Download App</button>
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
            <button className="px-6 m-2 border-2 h-auto border-emerald-400 rounded-lg text-lg font-light">Log in</button>
          </nav>
        </div>
         
      );
    }
  
  