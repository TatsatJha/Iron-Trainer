import { useState } from "react"

export default function FormQuestion(props:{question: string, type:string}) {
  const [value, setValue] = useState(props.question)

  return (
    <>
    <input value={value} onChange={(e)=>setValue(e.target.value)} className = "inline-block w-32 leading-3 m-3 p-2 bg-violet-300 border-white shadow-inner " type={props.type} />
    </>
  )
}
