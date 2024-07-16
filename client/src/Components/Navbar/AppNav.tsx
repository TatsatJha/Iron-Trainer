import {useLogout } from "../../hooks/useLogout.js"
import Navbutton from "./Navbutton.js"


export const AppNav = () => {
    const {handleLogout, isLoggingOut, error} = useLogout()
    return(
    <div className="top-0 fixed flex w-screen px-24 text-blue-600 font-bold justify-between z-50 bg-slate-50 shadow p-2 ">
        <h1>
          <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
        </h1>
        <nav className='flex justify-evenly text-xl'>
          <Navbutton to = "/App/my-programs" name ="My Programs" style={"p-4 px-8"}></Navbutton>
          <Navbutton to = "/App/discover" name ="Discover" style={"p-4 px-8"}></Navbutton>
          <Navbutton to = "/App/chat" name ="AI Chat" style={"p-4 px-8"}></Navbutton>
          <button onClick={handleLogout} className={"p-4 px-8"}>Logout</button>
        </nav>
      </div>)
}
