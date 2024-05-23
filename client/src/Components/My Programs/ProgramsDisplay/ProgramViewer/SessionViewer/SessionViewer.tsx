import { useCallback} from 'react'
import {ExerciseViewer} from '../ExerciseViewer'
import { sessionType } from '../../../ProgramForm/ProgramTypes'

export interface Item{
  id: number
}
export interface ContainerState{
  exercises: Item[]
}

export default function SessionViewer(props:{session: sessionType, id: number}) {

  const renderExercise = useCallback(
    (exercise: {name: string,  reps: number, sets: number, notes: string}, index: number) => {
    return(
      <ExerciseViewer
        key={index}
        id={index}
        sets = {exercise.sets}
        reps = {exercise.reps}
        name={exercise.name}
        notes={exercise.notes}>
        </ExerciseViewer>
    )
  },
  [],)


  return (
    <div>
        <p className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'>{`Day ${props.id+1}`}</p>

      <div className='flex flex-col'>
          {props.session.exerciseList.map((exercise, index) => renderExercise(exercise, index))}
      </div>
      
      
    </div>
    
  )
}
