import { useEffect, useState } from "react";
import Navbutton from "./Navbutton";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Navbar(props:{mode: string}) {
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
      <button className="px-6 h-fit my-auto py-2 bg-blue-600 text-white rounded-lg m-2 font-bold"> Download App</button>
      <button className="text-3xl pr-6">
          <IoReorderThreeOutline></IoReorderThreeOutline>
      </button>
    </div>

    :
    (props.mode == 'app') ?

    <div className="top-0 fixed flex w-screen px-24 text-blue-600 font-bold justify-between z-50 bg-slate-50 shadow p-2 ">
      <h1>
        <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
      </h1>
      <nav className='flex justify-evenly text-xl'>
        <Navbutton to = "/App/my-programs" name ="My Programs" style={"p-4 px-8"}></Navbutton>
        <Navbutton to = "/App/discover" name ="Discover" style={"p-4 px-8"}></Navbutton>
        <Navbutton to = "/App/chat" name ="AI Chat" style={"p-4 px-8"}></Navbutton>
      </nav>
    </div>

     :

     <div className="top-0 fixed flex w-screen px-24 text-blue-600 font-bold justify-between z-50 bg-slate-50 shadow p-2 ">
      <h1>
        <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
      </h1>
      <nav className='flex justify-evenly text-xl'>
        <Navbutton to = "/" name ="Home" style={"p-4 px-8"}></Navbutton>
        <Navbutton to = "/about" name ="About Us" style={"p-4 px-8"}></Navbutton>
        <Navbutton to = "/App" name ="App" style={"border-2 border-blue-400 rounded-lg p-2 m-2 px-8"}></Navbutton>
        <Navbutton style={"px-6 m-2 border-2 border-blue-400 bg-blue-600 py-2 text-white rounded-lg text-lg font-bold"} name="Log in" to="/login"></Navbutton>
      </nav>
    </div>
  );
}

