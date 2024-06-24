import { Avatar } from "@mui/material";

export default function Message(props:{text: string}) {
  return (
    <div className="border-gray-100 shadow rounded-xl border-solid border-2 w-fit flex py-4 pr-8">
        <Avatar className="m-4"></Avatar>
        <p className="my-auto">{props.text}</p>
    </div>
  )
}
