import { useCallback,  useState } from 'react'
import {ExerciseViewer} from './ExerciseViewer'

export interface Item{
  id: number
}
export interface ContainerState{
  exercises: Item[]
}

export default function SessionViewer(props:{session: {id: number, name:string, bottomRep: number, topRep: number}, id: number}) {

  const [exercises, setExercises] = useState([{id: 0}])

  const renderExercise = useCallback(
    (exercise: {id: number}, index: number) => {
    return(
      <ExerciseViewer
        key={exercise.id}
        id={exercise.id}>
        </ExerciseViewer>
    )
  },
  [],)


  return (
    <div>
        <p className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'>{props.session.name}</p>

      <div className='flex flex-col'>
          {exercises.map((exercise, index) => renderExercise(exercise, index))}
      </div>
      
      
    </div>
    
  )
}
