import { FC} from 'react'
import { exerciseType } from '../../../types/ProgramTypes';


export const ExerciseViewer: FC<exerciseType> = ({id, sets, reps, name}) => {
  
  const questionStyle = `inline-block text-sm py-2 text-center border-b border-gray-400 mx-1`

  return ( 
    <div 
    id={`${id}`} 
    className={`w-[30vw] my-1 p-2border-solid text-center bg-white shadow rounded-md p-6 hover:-translate-y-1 transition ease-in-out duration-200 hover:shadow-lg flex justify-between`}>
      <p className = {questionStyle + " w-[11rem]"} >{name}</p>
      <p className = {questionStyle + " w-[3rem]"}>Sets: {sets}</p>
      <p className = {questionStyle + " w-[3rem]"}>Reps: {reps}</p>
    </div >
  )
}
