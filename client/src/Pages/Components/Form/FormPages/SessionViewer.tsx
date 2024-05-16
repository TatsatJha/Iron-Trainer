import { useCallback,  useState } from 'react'
import {ExerciseViewer} from './ExerciseViewer'
import { sessionType } from './ItemTypes'

export interface Item{
  id: number
}
export interface ContainerState{
  exercises: Item[]
}

export default function SessionViewer(props:{session: sessionType, id: number}) {

  const renderExercise = useCallback(
    (exercise: {name: string,  bottomRep: number, topRep: number, sets: number, notes: string}, index: number) => {
    return(
      <ExerciseViewer
        key={index}
        id={index}
        sets = {exercise.sets}
        bottomRep = {exercise.bottomRep}
        topRep = {exercise.topRep}
        name={exercise.name}
        notes={exercise.notes}>
        </ExerciseViewer>
    )
  },
  [],)


  return (
    <div>
        <p className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'>{props.session.name}</p>

      <div className='flex flex-col'>
          {props.session.exerciseList.map((exercise, index) => renderExercise(exercise, index))}
      </div>
      
      
    </div>
    
  )
}
