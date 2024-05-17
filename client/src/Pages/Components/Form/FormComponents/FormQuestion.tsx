import { useState } from "react"
import { exerciseType } from "../FormPages/ItemTypes"

// allow width to be given in rem
export default function FormQuestion(props:{question: string, type:string, readonly:boolean}) {

  const [value, setValue] = useState(props.question)

  const updateValue = (e:React.ChangeEvent<HTMLInputElement>)=>
  {
    setValue(e.target.value)
  }

  return (
    <span>
      {(props.type === "number") ? 
      <input readOnly={props.readonly} value={value} onChange={updateValue} className = {`inline-block w-[3rem] text-sm py-2 mx-2 bg-violet-300 border-gray-400 border-2 rounded-lg shadow-inner text-center`} type={props.type} />  :

       <input value={value} onChange={updateValue} className = {`inline-block w-[11rem] text-sm py-2 mx-2 bg-violet-300 border-gray-400 border-2 rounded-lg shadow-inner text-center`} type={props.type} />}
    
    </span>
  )
}
