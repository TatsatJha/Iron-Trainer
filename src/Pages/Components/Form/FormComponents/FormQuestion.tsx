import React from 'react'

export default function FormQuestion(props:{question: string, type:string}) {
  return (
    <>
    <h3 className='text-xl'>{props.question}</h3>
            <input className = "block m-3 p-2 w-48 rounded-lg shadow-lg" type={props.type} />
    </>
  )
}
