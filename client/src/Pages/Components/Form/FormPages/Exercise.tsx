import React, { FC, MouseEventHandler, useEffect, useRef, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FormQuestion from '../FormComponents/FormQuestion';
import { useDrag, useDrop } from 'react-dnd';
import type{Identifier, XYCoord} from 'dnd-core'

import { ItemTypes } from './ItemTypes';


export interface ExerciseProps{
  exercises: Array<{id: number}>, 
  id: number, 
  index: number,
  setExercises: Function,
  moveExercise: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem{
  index: number,
  id: string,
  type: string
}

export const Exercise: FC<ExerciseProps> = ({id, exercises, index, setExercises, moveExercise}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [{handlerId}, drop] = useDrop<
    DragItem,
    void,
    {handlerId: Identifier | null}
  >({
    accept: ItemTypes.EXERCISE,
    collect(monitor){
      return{
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor){
      if(!ref.current){
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if(dragIndex === hoverIndex){
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveExercise(dragIndex, hoverIndex)

      item.index = hoverIndex
    }
  }

  )

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.EXERCISE,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  const deleteExercise = ()=>{
    const newList = exercises.filter((item) => item.id !== id);
    setExercises(newList);
  }
 
  return ( 
    <div 
    ref={ref}
    data-handler-id={handlerId}
    id={`${id}`} 
    draggable={true} 
    className={
      `w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid text-center inline-block bg-violet-300 shadow-xl mt-8 opacity-${opacity}`}
    >
      <span ><BsThreeDotsVertical className='cursor-grab active:cursor-grabbing inline text-xl'></BsThreeDotsVertical></span>
      <FormQuestion question={"Exercise Name"} type='text'></FormQuestion>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>x</span>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>—</span>
      <FormQuestion question='' type='number'></FormQuestion>
      <FormQuestion  question='Descriptions' type='text-area'></FormQuestion>  
      <button ><FaTrashAlt onClick={deleteExercise} className='text-sm'></FaTrashAlt></button>
    </div >
  )
}
