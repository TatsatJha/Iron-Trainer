import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/common/title'
import Sessions from '../../components/common/sessions'
import { firestore } from '../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

export default function ViewProgram() {
  const [sessions, setSessions] = useState<{ id: any; name: any; exerciseList: any }[]>([])
  const [name, setName] = useState("")

  const {programId} = useParams();
  useEffect(()=>{
    const fetchData = async () => {
      const programRef = doc(collection(firestore, "Programs"), programId);
      const programDoc = await getDoc(programRef);
      if (!programDoc.exists) {
        console.error("No such document!");
        return;
      }
      const programData = programDoc.data();
      if (!programData) {
        console.error("No program data found!");
        return;
      }

      const name = programData.name;
      
      let sessions = programData.Sessions;
      let i = 0;
      let newSessions = []; 
      while(sessions[i]){
        newSessions.push({
          id: sessions[i].id,
          name: sessions[i].name,
          exerciseList: sessions[i].exerciseList
        })
        i++;
      }

      setName(name)
      setSessions(newSessions)
    };
    fetchData();
  }, [])


  return(
    <div className='absolute w-screen top-36'>
      <Title style={""} name={name}></Title>
      <Sessions setSessions={null} sessions={sessions}></Sessions>
    </div>)
}

