import React, { MouseEventHandler } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import FormQuestion from '../FormComponents/FormQuestion';

export default function Exercise(props:{exercises: Array<JSX.Element>, id: Number, setExercises: Function}) {

  const deleteExercise = ()=>{
    console.log(props.exercises)
    const newList = props.exercises.filter((item) => item.props.id !== props.id);
    props.setExercises(newList);
  }
  
  
  return (
    <div className='w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid mt-12 text-center inline-block bg-violet-300 shadow-xl hover:scale-105 ease-in-out duration-200'>
      {/* <button onClick={deleteExercise}><FaTrashAlt className='text-sm'></FaTrashAlt></button> */}
      <FormQuestion question='Exercise Name' type='text'></FormQuestion>
      <FormQuestion question='Number of sets' type='number'></FormQuestion>
      <FormQuestion question='Rep range' type='text'></FormQuestion>
      <FormQuestion question='Descriptions' type='text-area'></FormQuestion>  
    </div>
  )
}
