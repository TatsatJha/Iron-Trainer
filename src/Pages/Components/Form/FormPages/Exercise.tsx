import React, { MouseEventHandler } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FormQuestion from '../FormComponents/FormQuestion';

export default function Exercise(props:{exercises: Array<JSX.Element>, id: Number, setExercises: Function}) {

  const deleteExercise = ()=>{
    console.log(props.exercises)
    const newList = props.exercises.filter((item) => item.props.id !== props.id);
    props.setExercises(newList);
  }
  
  
  return (
    <div className='w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid mt-8 text-center inline-block bg-violet-300 shadow-xl '>
      <BsThreeDotsVertical className='inline text-xl'></BsThreeDotsVertical>
      <FormQuestion question='Exercise Name' type='text'></FormQuestion>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>x</span>
      <FormQuestion question='Reps' type='number'></FormQuestion>
      <span>—</span>
      <FormQuestion question='Reps' type='number'></FormQuestion>
      <FormQuestion  question='Descriptions' type='text-area'></FormQuestion>  
      <button onClick={deleteExercise}><FaTrashAlt className='text-sm'></FaTrashAlt></button>
    </div>
  )
}
