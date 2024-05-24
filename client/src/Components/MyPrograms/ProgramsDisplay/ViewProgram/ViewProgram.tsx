import { useCallback, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import SessionViewer from "./SessionViewer/SessionViewer"
import { exerciseType, sessionType } from '../../CreateProgram/ProgramTypes'


export default function index(props:{programName: string, data: Array<sessionType>}) {

  const [sessions, setSessions] = useState(props.data)

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
    [sessions, setSessions]
  )

  return(
    <>

      <h1 className='text-center text-3xl mt-28 block mx-auto bg-[#dcdcdc] outline-transparent text-violet-700 border-violet-700'>{props.programName}</h1>

      <div className='relative flex justify-center items-center'>
          <div id="slider" className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex'>
          {
            sessions.map((e)=> renderSession(e))
          }      
          </div>
        </div>
      
      
      
    </>)
}

