import React, { useCallback, useEffect, useState } from 'react'
import Exercise from './Exercise'
import { BsPlus } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'


export default function ExerciseBuilder(props:{sessions: Array<{id: number}>, id: number, setSessions: Function}) {

  const [exercises, setExercises] = useState([{id: 0}])
  const [title, setTitle] = useState("Day 1")

  const addExercise = ()=>{
    setExercises([...exercises, {id: exercises.length}])
  }
  const renderExercise = useCallback(
      (exercise: {id: number}) => {
      return(
        <Exercise
          key={exercise.id}
          id={exercise.id}
          exercises={exercises}
          setExercises={setExercises}
        >
        </Exercise>
      )
    },
    [exercises, setExercises],
  )

  const deleteSession = ()=>{
    const newList = props.sessions.filter((item) => item.id !== props.id);
    props.setSessions(newList)
  }

  return (
    <div>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'></input>
        <button onClick={deleteSession}><FaTrashAlt></FaTrashAlt></button>

      <div className='flex flex-col'>
          {exercises.map((exercise) => renderExercise(exercise))}
        {<button onClick={addExercise} className='w-fit mx-16 bg-violet-300 p-3 rounded-xl border-violet-500 border-2 m-4'><BsPlus className='text-4xl text-violet-700 stroke-[0.35px]'></BsPlus></button>
        
        }
      </div>
      
      
    </div>
    
  )
}
