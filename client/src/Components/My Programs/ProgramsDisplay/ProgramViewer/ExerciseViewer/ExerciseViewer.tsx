import { FC} from 'react'
import { exerciseType } from '../../../ProgramForm/ProgramTypes';


export const ExerciseViewer: FC<exerciseType> = ({id, sets, bottomRep, topRep, name, notes}) => {
  
  const questionStyle = `inline-block text-sm py-2 mx-2 bg-violet-300 border-gray-400 border-2 rounded-lg shadow-inner text-center `

  return ( 
    <div 
    id={`${id}`} 
    className={
      `w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid text-center inline-block bg-violet-300 shadow-xl mt-8`}
    >
       <input readOnly value={name} className = {questionStyle + " w-[11rem]"} type="text" />
      <input readOnly value={sets} className = {questionStyle + " w-[3rem]"} type="number" />
      <span>x</span>
      <input readOnly value={bottomRep} className = {questionStyle + " w-[3rem]"} type="number" />
      <span>—</span>
      <input readOnly value={topRep} className = {questionStyle + " w-[3rem]"} type="number" />
      <input readOnly value={notes}  className = {questionStyle + " w-[11rem]"} type="text" />
    </div >
  )
}
