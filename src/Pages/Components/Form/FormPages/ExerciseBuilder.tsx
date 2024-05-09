import React, { useEffect, useState } from 'react'
import Exercise from './Exercise'
import { BsPlus } from 'react-icons/bs'


export default function ExerciseBuilder(props:{sessionTitle: string}) {

  const [exercises, setExercises] = useState<JSX.Element[]>([])
  const [exerciseCount, setExerciseCount] = useState(0)

  const addExercise = ()=>{
    //need to use this midarray so each exercise knows the entire list
    const midArray = [...exercises, <Exercise exercises={exercises} setExercises={setExercises} id={exerciseCount} key={exerciseCount}></Exercise>]
    const newArray = midArray.map((exercise)=> <Exercise exercises={midArray} setExercises={setExercises} id={exercise.props.id} key={exercise.key}></Exercise>)
    
    setExerciseCount(exerciseCount+1);
    setExercises(newArray)
  }
    
  return (
    <div>
      <input type='text' value={props.sessionTitle} className='text-center text-lg mt-8 block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'></input>
      <div className='flex flex-col'>
          {exercises}
        {<button onClick={addExercise} className='w-fit mx-16 bg-violet-300 p-3 rounded-xl border-violet-500 border-2 m-4'><BsPlus className='text-4xl text-violet-700 stroke-[0.35px]'></BsPlus></button>
        
        }
      </div>
      
      
    </div>
    
  )
}
