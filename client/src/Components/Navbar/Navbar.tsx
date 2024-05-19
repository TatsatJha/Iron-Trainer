import Navbutton from "./Navbutton";

    export default function Navbar() {
      return (
        <div className="top-0 fixed w-screen px-24 text-violet-800 font-bold flex justify-between z-50 bg-[#ffffff]">
          <h1>
            <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
          </h1>
          <nav className='flex justify-evenly text-xl'>
            <Navbutton to = "/" name ="Home" style={"p-4 px-8"}></Navbutton>
            <Navbutton to = "/programs" name ="My Programs" style={"p-4 px-8"}></Navbutton>
            <Navbutton to = "/progress" name ="Progress" style={"p-4 px-8"}></Navbutton>
            <Navbutton to = "/discover" name ="Discover" style={"p-4 px-8"}></Navbutton>
          </nav>
          <button className="px-6 m-2 border-2 h-auto border-violet-600 rounded-lg text-lg font-light">Log in</button>
        </div>
      );
    }
  
  