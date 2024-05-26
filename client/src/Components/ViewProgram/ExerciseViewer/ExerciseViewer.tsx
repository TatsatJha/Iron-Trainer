import { FC} from 'react'
import { exerciseType } from '../../../types/ProgramTypes';


export const ExerciseViewer: FC<exerciseType> = ({id, sets, reps, name, notes}) => {
  
  const questionStyle = `inline-block text-sm bg-[#dcdcdc] py-2 text-center border-[0.5px] border-gray-400 mx-1`

  return ( 
    <div 
    id={`${id}`} 
    className={`w-[30vw] my-1 p-2border-solid text-center inline-block bg-white shadow rounded-md p-6 text-[#7d7d7d] hover:-translate-y-1 transition ease-in-out duration-200 hover:shadow-lg`}>
      <input readOnly value={name} className = {questionStyle + " w-[11rem]"} type="text" />
      <input readOnly value={sets} className = {questionStyle + " w-[3rem]"} type="number" />
      <input readOnly value={reps} className = {questionStyle + " w-[3rem]"} type="number" />
      <input readOnly value={notes}  className = {questionStyle + " w-[11rem]"} type="text" />
    </div >
  )
}
