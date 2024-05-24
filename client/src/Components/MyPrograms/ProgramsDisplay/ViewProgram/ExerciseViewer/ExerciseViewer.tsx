import { FC} from 'react'
import { exerciseType } from '../../../CreateProgram/ProgramTypes';


export const ExerciseViewer: FC<exerciseType> = ({id, sets, reps, name, notes}) => {
  
  const questionStyle = `inline-block text-sm bg-[#dcdcdc] py-2 text-center border-[0.5px] border-gray-400 mx-1`

  return ( 
    <div 
    id={`${id}`} 
    className={`w-[45vw] mx-[2.5vw] p-2 border-gray-500 border-b-[1px] border-solid text-center inline-block`}>
       <input readOnly value={name} className = {questionStyle + " w-[11rem]"} type="text" />
      <input readOnly value={sets} className = {questionStyle + " w-[3rem]"} type="number" />
      <input readOnly value={reps} className = {questionStyle + " w-[3rem]"} type="number" />
      <input readOnly value={notes}  className = {questionStyle + " w-[11rem]"} type="text" />
    </div >
  )
}
