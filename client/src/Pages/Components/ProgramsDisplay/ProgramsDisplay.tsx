import React, { MouseEventHandler } from 'react'
import { BsPlusSquare } from 'react-icons/bs'


export default function ProgramsDisplay(props: {toggleOpen: MouseEventHandler}) {
  return (
    <>
        <div className='grid grid-cols-3'>
          {/* <p className='border-solid m-12 border-black border-2 bg-[#DDE6ED] '>{}</p> */}
        </div>
        <div onClick={props.toggleOpen} className='mb-16'>
          <BsPlusSquare className='absolute right-24 text-4xl'></BsPlusSquare>
        </div>

    </>
  )
}
