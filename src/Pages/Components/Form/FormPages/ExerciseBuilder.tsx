import React, { useEffect, useState } from 'react'
import Exercise from './Exercise'
import { BsPlusSquare } from 'react-icons/bs'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


export default function ExerciseBuilder() {
  const [day, setDay] = useState(1)
  const [exercises, setExercises] = useState<JSX.Element[]>([])
  const [exerciseCount, setExerciseCount] = useState(0)

  const addExercise = ()=>{
    //need to use this midarray shenanigins so each exercise knows the entire list
    const midArray = [...exercises, <Exercise exercises={exercises} setExercises={setExercises} id={exerciseCount} key={exerciseCount}></Exercise>]
    const newArray = midArray.map((exercise)=> <Exercise exercises={midArray} setExercises={setExercises} id={exercise.props.id} key={exercise.key}></Exercise>)

    console.log(newArray)

    
    setExerciseCount(exerciseCount+1);
    setExercises(newArray)
  }
  const slideLeft = () =>{
    let slider = document.getElementById('slider')
    if(slider == null){
      throw new Error("slider is null");
    }
    slider.scrollLeft = slider.scrollLeft - 5
  }
  const slideRight = () =>{
    let slider = document.getElementById('slider')
    if(slider == null){
      throw new Error("slider is null");
    }
    slider.scrollLeft = slider.scrollLeft + 5
  }
    
  return (
    <>
    <p className='text-center text-3xl pt-12 text-violet-700'> Day {day}</p>
      <div className='relative flex justify-center items-center'>
        <MdChevronLeft onClick ={slideLeft} size={40} className='absolute left-0 '></MdChevronLeft>
        <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth pb-12'>
          {exercises}
        </div>
        <MdChevronRight onClick = {slideRight} size={40} className='absolute right-0 '></MdChevronRight>
      </div>
      <button onClick={addExercise} className='m-16 text-xl bg-violet-300 p-5 rounded-xl border-violet-500 border-2'>Add Exercise</button>
      
    </>
    
  )
}
