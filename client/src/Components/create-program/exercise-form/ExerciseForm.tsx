import { FC,  useEffect,  useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd';
import type{Identifier, XYCoord} from 'dnd-core'
import { ItemTypes, exerciseType, sessionType } from '../../../types/ProgramTypes';
import AddElementButton from '../../common/add-element-button';


export interface ExerciseProps{ 
  id: number, 
  index: number,
  exercises: Array<exerciseType>,
  setExercises: Function,
  sessions: Array<sessionType>,
  sessionId: number,
  setSessions: Function,
  moveExercise: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem{
  index: number,
  id: string,
  type: string
}

export const ExerciseForm: FC<ExerciseProps> = ({id, exercises, index, setExercises, sessions, sessionId, setSessions, moveExercise}) => {

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
  const [reps, setReps] = useState("")
  const [notes, setNotes] = useState("")

  const updateAll = ()=>{
    console.log("id: ", id, " sessions: ", sessions)

    const exerciseObject = {
      id: id,
      name: name,
      sets: Number(sets),
      reps: Number(reps),
      notes: notes
    }

    const newExercises = exercises.map((exercise)=> (exercise.id == exerciseObject.id) ? exerciseObject : exercise)
    setExercises(newExercises)

    const sessionObject = {
      id: sessionId,
      exerciseList: exercises
    }
    const newSessions = sessions.map((session, index)=> (index == sessionObject.id) ? sessionObject : session)
    
    setSessions(newSessions)
  }

  useEffect(updateAll,[name, sets, reps, notes])

  const questionStyle = `text-md rounded px-1 border-[0.5px] border-gray-400 hover:-translate-y-1 transition ease-in-out duration-200`

  return (

    <div 
    ref={ref}
    data-handler-id={handlerId}
    id={`${id}`} 
    draggable={true} 
    style={{opacity}}
    className={`w-[30vw] my-1 p-2border-solid text-center inline-block bg-white shadow rounded-md p-6 text-[#7d7d7d] hover:-translate-y-1 transition ease-in-out duration-200 hover:shadow-lg`}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}} className = {questionStyle + "text-start round h-8 text-[1.25rem] w-full block target:-translate-y-1"} />
        <div className='flex'>
          <p className='w-1/3 py-2 text-start'>Sets</p>
          <p className='w-1/3 py-2 text-start'>Reps</p>
          <p className='w-1/3 py-2 text-start'>Notes</p>
        </div>
        
        <div className='flex text-start'>
          <div className='w-1/3 '>
            <input value={sets} onChange={(e)=>{setSets(e.target.value)}} className = {questionStyle + " w-[3rem] "} type="number" />
          </div>
          <div className='w-1/3'>
            <input value={reps} onChange={(e)=>{setReps(e.target.value)}} className = {questionStyle + " w-[3rem]"} type="number" />
          </div>
          <div className='w-1/3'>
            <input value={notes} onChange={(e)=>{setNotes(e.target.value)}} className = {questionStyle + " w-[3rem]"} type="text" />
          </div>
        </div>
    </div >
  )
}
