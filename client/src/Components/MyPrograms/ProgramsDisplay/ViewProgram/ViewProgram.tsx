import { useCallback, useEffect, useState } from 'react'
import SessionViewer from "./SessionViewer/SessionViewer"
import { exerciseType } from '../../CreateProgram/ProgramTypes'


export default function index() {
  const [sessions, setSessions] = useState([])
  const [name, setName] = useState()

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/api/v1/programs/`)
      const program = await response.json();
      const sessions = program.sesssions
      const name = program.name

      setName(name)
      setSessions(sessions)
    };
    fetchData();
  }, [])

  

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

      <h1 className='text-center text-3xl mt-28 block mx-auto bg-[#dcdcdc] outline-transparent text-violet-700 border-violet-700'>{name}</h1>

      <div className='relative flex justify-center items-center'>
          <div id="slider" className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex'>
          {
            sessions.map((e)=> renderSession(e))
          }      
          </div>
        </div>
      
      
      
    </>)
}

