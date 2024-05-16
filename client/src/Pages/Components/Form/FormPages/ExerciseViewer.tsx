import { FC} from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import FormQuestion from '../FormComponents/FormQuestion';


export interface ExerciseProps{ 
  id: number, 
}

export const ExerciseViewer: FC<ExerciseProps> = ({id}) => {
  
  return ( 
    <div 
    id={`${id}`} 
    className={
      `w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid text-center inline-block bg-violet-300 shadow-xl mt-8`}
    >
      <span ><BsThreeDotsVertical className='cursor-grab active:cursor-grabbing inline text-xl'></BsThreeDotsVertical></span>
      <FormQuestion question={"Exercise Name"} type='text'></FormQuestion>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>x</span>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>—</span>
      <FormQuestion question='' type='number'></FormQuestion>
      <FormQuestion  question='Descriptions' type='text-area'></FormQuestion>  
    </div >
  )
}
