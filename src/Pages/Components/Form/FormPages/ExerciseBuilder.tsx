import React, { useEffect, useState } from 'react'
import Exercise from './Exercise'
import { BsPlus } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'


export default function ExerciseBuilder(props:{id: number, sessions: Array<Number>, setSession: Function}) {

  const [exercises, setExercises] = useState<JSX.Element[]>([])
  const [exerciseCount, setExerciseCount] = useState(0)
  const [title, setTitle] = useState("Day 1")

  const addExercise = ()=>{
    //need to use this midarray so each exercise knows the entire list
    const midArray = [...exercises, <Exercise exercises={exercises} setExercises={setExercises} id={exerciseCount} key={exerciseCount}></Exercise>]
    const newArray = midArray.map((exercise)=> <Exercise exercises={midArray} setExercises={setExercises} id={exercise.props.id} key={exercise.key}></Exercise>)
    
    setExerciseCount(exerciseCount+1);
    setExercises(newArray)
  }
  

  //TODO, this delete function is funky, will fix later
  const deleteSession = ()=>{
    setTitle("")
    setExercises([])
    const newList = props.sessions.filter((item) => item !== props.id);
    props.setSession(newList)
  }

  return (
    <div>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'></input>
        <button onClick={deleteSession}><FaTrashAlt></FaTrashAlt></button>

      <div className='flex flex-col'>
          {exercises}
        {<button onClick={addExercise} className='w-fit mx-16 bg-violet-300 p-3 rounded-xl border-violet-500 border-2 m-4'><BsPlus className='text-4xl text-violet-700 stroke-[0.35px]'></BsPlus></button>
        
        }
      </div>
      
      
    </div>
    
  )
}
