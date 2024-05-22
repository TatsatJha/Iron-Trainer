import { FC,  useEffect,  useRef, useState } from 'react'
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
  sessionId: number,
  setSessions: Function,
  title: string,
  moveExercise: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem{
  index: number,
  id: string,
  type: string
}

export const ExerciseForm: FC<ExerciseProps> = ({id, exercises, index, setExercises, sessions, sessionId, setSessions, title, moveExercise}) => {

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

  const [name, setName] = useState("Exercise Name")
  const [sets, setSets] = useState("")
  const [bottomRep, setBottomRep] = useState("")
  const [topRep, setTopRep] = useState("")
  const [notes, setNotes] = useState("")

  const updateAll = ()=>{
    console.log("id: ", id, " sessions: ", sessions)

    const exerciseObject = {
      id: id,
      name: name,
      sets: Number(sets),
      bottomRep: Number(bottomRep),
      topRep: Number(topRep),
      notes: notes
    }

    const newExercises = exercises.map((exercise)=> (exercise.id == exerciseObject.id) ? exerciseObject : exercise)
    setExercises(newExercises)

    const sessionObject = {
      id: sessionId,
      name: title,
      exerciseList: exercises
    }
    const newSessions = sessions.map((session, index)=> (index == sessionObject.id) ? sessionObject : session)
    
    setSessions(newSessions)
  }

  useEffect(updateAll,[name, sets, bottomRep, topRep, notes, title])

  const questionStyle = `text-sm px-2 border-[0.5px] border-gray-400 hover:-translate-y-1 transition ease-in-out duration-200 h-`

  return (

    <div 
    ref={ref}
    data-handler-id={handlerId}
    id={`${id}`} 
    draggable={true} 
    style={{opacity}}
    className={`w-[25vw] mx-8 p-2border-solid text-center inline-block bg-white shadow-md rounded-md p-6 text-[#7d7d7d]`}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} className = {questionStyle + "text-start h-8 text-[1.25rem] w-full block target:-translate-y-1"} />
        <div className='flex'>
          <p className='w-1/3 py-2 text-start'>Sets</p>
          <p className='w-1/3 py-2 text-start'>Reps</p>
          <p className='w-1/3 py-2 text-start'>Intensity</p>
        </div>
        
        <div>
        <input value={sets} onChange={(e)=>{setSets(e.target.value)}} className = {questionStyle + " w-[3rem]"} type="number" />
        <input value={bottomRep} onChange={(e)=>{setBottomRep(e.target.value)}} className = {questionStyle + " w-[3rem]"} type="number" />
        <input value={notes} onChange={(e)=>{setNotes(e.target.value)}} className = {questionStyle + " w-[3rem]"} type="text" />
        </div>
    </div >
  )
}
