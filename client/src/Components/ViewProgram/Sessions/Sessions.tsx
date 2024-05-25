import { useCallback } from "react";
import { exerciseType, sessionType } from "../../../types/ProgramTypes";
import SessionViewer from "../SessionViewer";

export default function Sessions({sessions}:{sessions: Array<sessionType>}) {
    const renderSession = useCallback(
        (session:{id: number, exerciseList: Array<exerciseType>})=>{
          return(
            <SessionViewer 
              id={session.id} 
              key={session.id} 
              session={session}>
            </SessionViewer>
          )
        },
        [sessions]
      )
  return (
    <div className='relative flex justify-center items-center'>
        <div className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex'>
        {
            sessions.map((e)=> renderSession(e))
        }      
        </div>
    </div>
  )
}
