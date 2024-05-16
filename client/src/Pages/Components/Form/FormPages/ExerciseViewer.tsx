import { FC} from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import FormQuestion from '../FormComponents/FormQuestion';
import { exerciseType } from './ItemTypes';


export const ExerciseViewer: FC<exerciseType> = ({id, sets, bottomRep, topRep, name, notes}) => {
  
  return ( 
    <div 
    id={`${id}`} 
    className={
      `w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid text-center inline-block bg-violet-300 shadow-xl mt-8`}
    >
      <span ><BsThreeDotsVertical className='cursor-grab active:cursor-grabbing inline text-xl'></BsThreeDotsVertical></span>
      <FormQuestion question={name} type='text' readonly = {true}></FormQuestion>
      <FormQuestion question={String(sets)} type='number'readonly = {true}></FormQuestion>
      <span>x</span>
      <FormQuestion question={String(bottomRep)} type='number' readonly = {true}></FormQuestion>
      <span>—</span>
      <FormQuestion question={String(topRep)} type='number' readonly = {true}></FormQuestion>
      <FormQuestion  question={notes} type='text-area' readonly = {true}></FormQuestion>  
    </div >
  )
}
