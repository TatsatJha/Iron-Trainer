import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/common/title'
import Sessions from '../../components/common/sessions'

export default function ViewProgram() {
  const [sessions, setSessions] = useState([])
  const [name, setName] = useState("")

  const {programId} = useParams();
  useEffect(()=>{
    const fetchData = async () => {
      
      const response = await fetch(`http://localhost:3000/api/v1/programs/${programId}`)
      const program = await response.json();
      const sessions = program[0].sessions
      const name = program[0].name
      console.log(sessions)
      setName(name)
      setSessions(sessions)
    };
    fetchData();
  }, [])


  return(
    <div className='absolute w-screen top-36'>
      <Title style={""} name={name}></Title>
      
      <Sessions setSessions={null} sessions={sessions}></Sessions>
      
    </div>)
}

