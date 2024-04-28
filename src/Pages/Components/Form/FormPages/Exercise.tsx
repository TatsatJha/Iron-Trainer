import React, { MouseEventHandler } from 'react'
import FormQuestion from '../FormComponents/FormQuestion';

export default function Exercise(props:{exercises: Array<JSX.Element>, id: Number, setExercises: Function}) {

  const deleteExercise = ()=>{
    console.log(props.exercises)
    const newList = props.exercises.filter((item) => item.props.id !== props.id);
    props.setExercises(newList);
  }
  
  
  return (
    <form className='w-fit p-8 rounded-xl border-black border-2 border-solid mt-32 mx-12 text-center inline-block bg-violet-300 shadow-xl hover:scale-105 ease-in-out duration-200'>
      <button onClick={deleteExercise}>delete</button>
      <FormQuestion question='Exercise Name' type='text'></FormQuestion>
      <FormQuestion question='Number of sets' type='number'></FormQuestion>
      <FormQuestion question='Rep range' type='text'></FormQuestion>
      <FormQuestion question='Descriptions' type='text-area'></FormQuestion>  
    </form>
  )
}
