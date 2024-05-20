import React, { useCallback, useEffect, useState } from 'react'
import {Exercise} from '../ExerciseForm/ExerciseForm'
import { BsPlus } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import update from "immutability-helper"
import { exerciseType, sessionType } from '../ProgramTypes'

export interface Item{
  id: number
  name: string,
  sets: number,  
  bottomRep: number, 
  topRep: number,
  notes: string
}
export interface ContainerState{
  exercises: Item[]
}

export default function ExerciseBuilder(props:{sessions: Array<sessionType>, id: number, setSessions: Function}) {

  const [title, setTitle] = useState("Day 1")
  const [exercises, setExercises] = useState<Array<exerciseType>>([{id: 0, name: "Exercise Name", sets: 0, bottomRep:0, topRep:0, notes: ""}])

  const addExercise = ()=>{
    const newArray = [...exercises, {id: exercises.length, name: "Exercise Name", sets: 0, bottomRep:0, topRep:0, notes: ""}]
    setExercises(newArray)
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
      (exercise: {id: number, name: string, sets: number, bottomRep: number, topRep: number, notes: string}, index: number) => {
      return(
        <Exercise
          key={exercise.id}
          id={exercise.id}
          index = {index}
          exercises={exercises}
          setExercises={setExercises}
          sessions = {props.sessions}
          setSessions = {props.setSessions}
          title = {title}
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
    <div >
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700 '></input>
        <button onClick={deleteSession}><FaTrashAlt></FaTrashAlt></button>

      <div className='flex flex-col'>
          {exercises.map((exercise, index) => renderExercise(exercise, index))}
        {<button onClick={addExercise} className='w-fit mx-16 bg-violet-300 p-3 rounded-xl border-violet-500 border-2 m-4'><BsPlus className='text-4xl text-violet-700 stroke-[0.35px]'></BsPlus></button>
        
        }
      </div>
      
      
    </div>
    
  )
}
