import { Avatar } from "@mui/material";
import { useEffect } from "react";

export default function Message(props:{text: string, id:string}) {
  useEffect(() => {
    typewriter()
  }, [])
  let i = 0;
  const typewriter = ()=>{
    const text = props.text
    if( i < text.length){
        document.getElementById(props.id)!.innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, 50)
    }
  }
  return (
    <div className="border-gray-100 rounded-xl border-solid border-2 w-fit flex py-4 pr-8 my-4">
        <Avatar className="m-4"></Avatar>
        <p id={props.id} className="my-auto"></p>
    </div>
  )
}
