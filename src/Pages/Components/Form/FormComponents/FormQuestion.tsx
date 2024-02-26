import React from 'react'

export default function FormQuestion(props:{question: string, type:string}) {
  return (
    <>
    <h3 className='text-xl'>{props.question}</h3>
            <input className = "block m-6 p-3 w-64 rounded-lg shadow-lg" type={props.type} />
    </>
  )
}
