import { useCallback, useState } from 'react'
import SessionForm from './SessionForm';
import { sessionType } from './ProgramTypes.ts';


export default function Form() {

  const [title, setTitle] = useState("Program Name")
  

  const [sessions, setSessions] = useState<Array<sessionType>>([{id: 0,  exerciseList:[]}])

  const addSession = () => {
    console.log(sessions.length)
    const newArray = [...sessions, {id: sessions.length, exerciseList:[{id: 0, name: "Exercise Name", sets: 0, bottomRep:0, topRep:0, notes: ""}]}]
    setSessions(newArray)
  }
  
  const renderSession = useCallback(
    (session:{id: number})=>{
      return(
        <SessionForm 
          id={session.id} 
          key={session.id}
          sessions={sessions} 
          setSessions={setSessions}>
        </SessionForm>
      )
    },
    [sessions, setSessions]
  )

  const saveProgram = async ()=>{
    const data = JSON.stringify({name: title, sessions: JSON.stringify(sessions)})
    const response = await fetch("http://localhost:3000/api/v1/programs", {
      method: "POST",
      mode: "cors",
      headers:{
        "Content-Type": "application/json"
      },
      body: data
    })
    
    return response;
  }

  return(
    <>
      <button onClick={addSession} className='text-lg block ml-auto'> Add Session </button>

      <div className='relative flex justify-center items-center'>
          <div id="slider" className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex justify-start px-[3vw]'>
          {
            sessions.map((e)=> renderSession(e))
          }      
          </div>
        </div>
      
      
      <button onClick={saveProgram}> SAVE PROGRAM </button>
    </>
  )
}
