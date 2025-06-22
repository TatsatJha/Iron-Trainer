import React, { useState, useEffect} from 'react'
import Sessions from '../../components/common/sessions'
import { firestore } from '../../firebase'
import { doc, getDoc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Session } from 'inspector';
import { sessionType } from '../../types/ProgramTypes';
import SessionViewer from '../../components/view-program/session-viewer';
import Runner from '../../components/run/runner/';
import Selector from '../../components/run/selector/';

export default function ProgramRunner() {
    const [sessions, setSessions] = useState<sessionType[]>([]);
    const [select, setSelect] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);
    const [running, setRunning] = useState<boolean>(false);
    const [name, setName] = useState("");
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
        setLoading(false);
        };
        fetchData();
      })
    


  return (
    (loading) ? <></>
    :
    (running) ?
    <Runner name={name} setSelect={setSelect} select={select} running={running} setRunning={setRunning} sessions={sessions}></Runner>
    :
    <Selector name={name} setSelect={setSelect} select={select} running={running} setRunning={setRunning} sessions={sessions}></Selector>

        // running ? 
        // :

  )
}
