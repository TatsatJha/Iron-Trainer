import React, { useState, useEffect} from 'react'
import Sessions from '../../components/common/sessions'
import { firestore } from '../../firebase'
import { doc, getDoc, collection } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Session } from 'inspector';
import { sessionType } from '../../types/ProgramTypes';
import SessionViewer from '../../components/view-program/session-viewer';

export default function ProgramRunner() {
    const [sessions, setSessions] = useState<sessionType[]>([]);
    const [select, setSelect] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
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
        setLoading(true);
        };
        fetchData();
      })
    


  return (
    loading 
    
    &&

    <div>
        <h1 className='text-3xl text-gray-800 font-bold mt-16 p-8'>
            You are Running: {name}
        </h1>
        <h2 className='text-xl px-8 pb-16 text-gray-600'>
            Today's Training Sessions <span className=''><b>{sessions[select].name}</b></span> 
        </h2>
        {}
        <div className='max-w-lg mx-auto flex'>
            <SessionViewer id={3} session={sessions[select]}></SessionViewer>
        </div>
        <div className='flex fixed bottom-4 right-16'>
            <button
                onClick={() => {
                    setSelect((prev) => (prev + 1) % sessions.length);
                }}
                className='bg-blue-500 mx-2 text-white px-4 py-2 h-fit rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300'
                > Change Session 
            </button>
            <button className=' bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300' onClick={()=>{console.log("Run")}}>
            Run
            </button>
        </div>
    </div>
  )
}
