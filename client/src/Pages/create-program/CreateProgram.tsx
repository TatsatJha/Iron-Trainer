import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Sessions from '../../components/common/sessions/Sessions.tsx';
import ProgramName from '../../components/create-program/program-name/ProgramName.tsx';
import { sessionType } from '../../types/ProgramTypes.ts';
import {firestore} from "../../firebase"
import { doc, getDoc, addDoc, collection, setDoc} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default function Form() {
  const { programId } = useParams();
  const [name, setName] = useState("Program Name");
  const [sessions, setSessions] = useState<Array<sessionType>>([
    { id: 0, name:"", exerciseList: [] },
  ]);
  
  useEffect(() => {
    if(programId) {
      // If programId is provided, it means we are editing an existing program
      console.log(`Editing program with id: ${programId}`);
      // Example:
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
        console.log(newSessions)
  
        setName(name)
        setSessions(newSessions)
      };
      fetchData();
    }
  }, []);

  


  const addSession = () => {
    const newArray = [
      ...sessions,
      {
        id: sessions.length,
        name: "",
        exerciseList: [
          { id: 0, name: "Exercise Name", sets: 0, reps: 0, notes: "" },
        ],
      },
    ];
    setSessions(newArray);
  };

  const save = async ()=>{
    const uid = getAuth().currentUser?.uid;
    if(programId) {
      // If programId is provided, update the existing program
      await setDoc(doc(firestore, "Programs", programId), {
        "name": name,
        "author": uid,
        "Sessions": {...sessions}
      });
    }
    //Programs Collection
    //  Program Document
    //    id: string (userName + "/" + title)
    //    title: string
    //    Sessions Collection
    //      Session Document
    //        id: number
    //        exerciseList: Array<Exercise>
  }

  return (
    <>
      <div className='absolute w-screen top-36'>
        <ProgramName name={name} setName={setName}></ProgramName>
        <Sessions sessions={sessions} setSessions={setSessions}></Sessions>
      </div>

      <div className='flex justify-end bg-white shadow-inner w-full'>
      
        <div className="fixed bottom-0 right-10 flex gap-4 p-4">
          <button
            onClick={addSession}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-blue-300 transition-all"
          >
            Add Session
          </button>
          <Link to={"../my-programs"}>
            <button
              onClick={save}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Save
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
