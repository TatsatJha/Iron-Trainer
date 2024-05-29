import { MouseEventHandler } from 'react'
import { BsPlus } from 'react-icons/bs'

export default function AddElementButton({mouseEvent}: {mouseEvent: MouseEventHandler}) {
  return (
    <div className='mx-auto'>
      <button onClick={mouseEvent} className='w-fit bg-gray-300 p-1 rounded-xl border-gray-700 border-2 m-4'><BsPlus className='text-4xl text-gray-700 stroke-[0.15px]'></BsPlus></button>
    </div>
  )
}
