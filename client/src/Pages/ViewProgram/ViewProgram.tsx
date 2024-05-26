import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../Components/common/Title'
import Sessions from '../../Components/common/Sessions'

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
    <>
      <Title style={""} name={name}></Title>
      
      <Sessions setSessions={null} sessions={sessions}></Sessions>
      
    </>)
}

