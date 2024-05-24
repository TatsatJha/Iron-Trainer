import { useCallback, useState } from 'react'
import SessionForm from '../../Components/MyPrograms/CreateProgram/SessionForm/index.tsx';
import { sessionType } from '../../Components/MyPrograms/ProgramTypes.ts';
import { Link } from 'react-router-dom';


export default function Form() {

  const [title, setTitle] = useState("Program Name")
  

  const [sessions, setSessions] = useState<Array<sessionType>>([{id: 0,  exerciseList:[]}])

  const addSession = () => {
    console.log(sessions.length)
    const newArray = [...sessions, {id: sessions.length, exerciseList:[{id: 0, name: "Exercise Name", sets: 0, reps:0, notes: ""}]}]
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
    <div className='top-20 flex justify-end bg-white shadow-inner w-full fixed'>
      <button onClick={addSession} className='text-lg p-4'> Add Session </button>

      <Link to={"../my-programs"}>
      <button onClick={saveProgram} className='text-lg p-4 mr-12'> Save </button>
      </Link>
    </div>

      <div className='absolute top-36 flex justify-center items-center'>
          <div className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex justify-start px-[3vw]'>
          {
            sessions.map((e)=> renderSession(e))
          }      
          </div>
        </div>
      

    </>
  )
}
