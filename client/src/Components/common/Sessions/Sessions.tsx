import { useCallback } from "react";
import { exerciseType, sessionType } from "../../../types/ProgramTypes";
import SessionViewer from "../../view-program/session-viewer";
import SessionForm from "../../create-program/session-form";


export default function Sessions({sessions, setSessions}:{sessions: Array<sessionType>, setSessions: Function | null}) {
    const renderSession = useCallback(
        (session:{id: number, exerciseList: Array<exerciseType>})=>{
          return (setSessions == null) ? (
            <SessionViewer 
              id={session.id} 
              key={session.id} 
              session={session}>
            </SessionViewer>

          ) :
          (
            <SessionForm 
              key={session.id}>
            </SessionForm>
          )
        },
        [sessions]
      )
  return (
    <div className='flex justify-center items-center'>
        <div className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex justify-evenly px-[3vw] '>
        {
            sessions.map((e)=> renderSession(e))
        }      
        </div>
    </div>
  )
}
