import { useEffect, useState } from "react";
import { MobileNav } from "./MobileNav";
import { GuestNav } from "./GuestNav";
import { AppNav } from "./AppNav";

export default function Navbar(props:{mode: string}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

  useEffect(() => {
    window.addEventListener("resize", ()=>{setIsMobile(window.innerWidth < 600)}, false);
  }, [window.innerWidth])
  

  return (
    (isMobile) ? 
    <MobileNav></MobileNav>
    :
    (props.mode == 'app') ?
    <AppNav></AppNav>
     :
     <GuestNav></GuestNav>
  );
}

