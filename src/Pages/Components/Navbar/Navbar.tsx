import React from "react";
import Navbutton from "./Navbutton";

    export default function Navbar() {
      return (
        <div className="flex justify-between">
          <h1 className='text-2xl p-4 flex justify-start'>
            Iron-Trainer
        </h1>
          <nav className='flex justify-evenly text-xl text-slate-950'>
            <Navbutton to = "/" name ="Home"></Navbutton>
            <Navbutton to = "/programs" name ="My Programs"></Navbutton>
            <Navbutton to = "/progress" name ="Progress"></Navbutton>
            <Navbutton to = "/discover" name ="Discover"></Navbutton>
          </nav>
        </div>
      );
    }
  
  