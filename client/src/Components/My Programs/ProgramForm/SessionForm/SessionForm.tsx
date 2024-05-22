import { useCallback, useEffect, useState } from 'react'
import {ExerciseForm} from '../ExerciseForm/index'
import { FaTrashAlt } from 'react-icons/fa'
import update from "immutability-helper"
import { exerciseType, sessionType } from '../ProgramTypes'
import AddElementButton from '../AddElement-Button'

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

export default function SessionForm({sessions, id, setSessions}:{sessions: Array<sessionType>, id: number, setSessions: Function}) {

  const [title, setTitle] = useState("Day 1")
  const [exercises, setExercises] = useState<Array<exerciseType>>([{id: 0, name: "Exercise Name", sets: 0, bottomRep:0, topRep:0, notes: ""}])

  const addExercise = ()=>{
    let newId = 0;
    while (newId < exercises.length) {
      if(exercises[newId].id != newId)
        break
      newId++
    }
    const newArray = [...exercises, {id: newId, name: "Exercise Name", sets: 0, bottomRep:0, topRep:0, notes: ""}]
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
        <ExerciseForm
          key={exercise.id}
          id={exercise.id}
          index = {index}
          exercises={exercises}
          setExercises={setExercises}
          sessions = {sessions}
          sessionId = {id}
          setSessions = {setSessions}
          title = {title}
          moveExercise = {moveExercise}>
        </ExerciseForm>
      )
    },
    [exercises, setExercises],
  )

  const deleteSession = ()=>{
    const newList = sessions.filter((item) => item.id !== id);
    setSessions(newList)
  }

  useEffect(()=>{
    const sessionObject = {
      id: id,
      name: title,
      exerciseList: exercises
    }
    const newSessions = sessions.map((session, index)=> (index == sessionObject.id) ? sessionObject : session)
    setSessions(newSessions)
  },[title])

  return (
    <div >
      <div className='group transition duration-300 w-fit'>
        <div className='my-4'>
          <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-xl block ml-8'>
          </input>
          <span className="block max-w-0 group-hover:max-w-full ml-8 transition-all duration-500 h-0.5 bg-violet-600"></span>
        </div>

        
      </div>

      <div className='flex flex-col'>
          {exercises.map((exercise, index) => renderExercise(exercise, index))}
          <AddElementButton mouseEvent={addExercise}></AddElementButton>
      </div>
      
      
    </div>
    
  )
}
