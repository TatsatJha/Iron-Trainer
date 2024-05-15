import React, { useCallback, useEffect, useState } from 'react'
import {Exercise} from './Exercise'
import { BsPlus } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import update from "immutability-helper"

export interface Item{
  id: number
}
export interface ContainerState{
  exercises: Item[]
}

export default function ExerciseBuilder(props:{sessions: Array<{id: number}>, id: number, setSessions: Function}) {

  const [exercises, setExercises] = useState([{id: 0}])
  const [title, setTitle] = useState("Day 1")

  const addExercise = ()=>{
    setExercises([...exercises, {id: exercises.length}])
  }

  const moveExercise = useCallback((dragIndex: number, hoverIndex: number) =>{
    setExercises((prevExercises: Item[])=>
      update(prevExercises, {
        $splice:[
          [dragIndex, 1],
          [hoverIndex, 0, prevExercises[dragIndex] as Item]
        ]
      })
    )
  }, [])

  const renderExercise = useCallback(
      (exercise: {id: number}, index: number) => {
      return(
        <Exercise
          key={exercise.id}
          id={exercise.id}
          index = {index}
          exercises={exercises}
          setExercises={setExercises}
          moveExercise = {moveExercise}>
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
          {exercises.map((exercise, index) => renderExercise(exercise, index))}
        {<button onClick={addExercise} className='w-fit mx-16 bg-violet-300 p-3 rounded-xl border-violet-500 border-2 m-4'><BsPlus className='text-4xl text-violet-700 stroke-[0.35px]'></BsPlus></button>
        
        }
      </div>
      
      
    </div>
    
  )
}
