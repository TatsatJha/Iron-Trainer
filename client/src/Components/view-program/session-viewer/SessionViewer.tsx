import { useCallback} from 'react'
import {ExerciseViewer} from '../exercise-viewer'
import { sessionType } from '../../../types/ProgramTypes'

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
    <div className='mx-[0.5vw]'>
      <div className='my-4 group transition duration-300 w-fit'>
        <p className='text-xl block w-[3vw]'>{`Day ${props.id+1}`}</p>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-emerald-400"></span>
      </div>
        {/* <p className='text-center text-lg block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'>{`Day ${props.id+1}`}</p> */}

      <div className='flex flex-col'>
          {props.session.exerciseList.map((exercise, index) => renderExercise(exercise, index))}
      </div>
      
      
    </div>
    
  )
}
