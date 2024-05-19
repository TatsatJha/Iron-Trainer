import { FC,  useRef, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDrag, useDrop } from 'react-dnd';
import type{Identifier, XYCoord} from 'dnd-core'

import { ItemTypes, exerciseType, sessionType } from '../ProgramTypes';


export interface ExerciseProps{ 
  id: number, 
  index: number,
  exercises: Array<exerciseType>,
  setExercises: Function,
  sessions: Array<sessionType>,
  setSessions: Function,
  title: string,
  moveExercise: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem{
  index: number,
  id: string,
  type: string
}

export const Exercise: FC<ExerciseProps> = ({id, exercises, index, setExercises, sessions, setSessions, title, moveExercise}) => {

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

  const questionStyle = `inline-block text-sm py-2 mx-2 bg-violet-300 border-gray-400 border-2 rounded-lg shadow-inner text-center `

  const exerciseStyle = `w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid text-center inline-block bg-violet-300 shadow-xl mt-8 opacity-${opacity}`

  const [name, setName] = useState("Exercise Name")
  const [sets, setSets] = useState("")
  const [bottomRep, setBottomRep] = useState("")
  const [topRep, setTopRep] = useState("")
  const [notes, setNotes] = useState("")

  const updateAll = ()=>{
    const exerciseObject = {
      id: index,
      name: name,
      sets: Number(sets),
      bottomRep: Number(bottomRep),
      topRep: Number(topRep),
      notes: notes
    }

    const newExercises = exercises.map((exercise, index)=> (index == exerciseObject.id) ? exerciseObject : exercise)
    setExercises(newExercises)

    const sessionObject = {
      id: index,
      name: title,
      exerciseList: exercises
    }
    const newSessions = sessions.map((session, index)=> (index == sessionObject.id) ? sessionObject : session)

    console.log(newSessions)
    setSessions(newSessions)
  }

  return ( 
    <div 
    ref={ref}
    data-handler-id={handlerId}
    id={`${id}`} 
    draggable={true} 
    className={exerciseStyle}>
      <span ><BsThreeDotsVertical className='cursor-grab active:cursor-grabbing inline text-xl'></BsThreeDotsVertical></span>

      <input value={name} onChange={(e)=>{setName(e.target.value); updateAll()}} className = {questionStyle + " w-[11rem]"} type="text" />
      <input value={sets} onChange={(e)=>{setSets(e.target.value); updateAll()}} className = {questionStyle + " w-[3rem]"} type="number" />
      <span>x</span>
      <input value={bottomRep} onChange={(e)=>{setBottomRep(e.target.value); updateAll()}} className = {questionStyle + " w-[3rem]"} type="number" />
      <span>—</span>
      <input value={topRep} onChange={(e)=>{setTopRep(e.target.value); updateAll()}} className = {questionStyle + " w-[3rem]"} type="number" />
      <input value={notes} onChange={(e)=>{setNotes(e.target.value); updateAll()}} className = {questionStyle + " w-[11rem]"} type="text" />
      <button ><FaTrashAlt onClick={deleteExercise} className='text-sm'></FaTrashAlt></button>
    </div >
  )
}
