import { useCallback, useEffect, useState } from 'react'
import Program from './Program';
import {programType, sessionType} from "../../../types/ProgramTypes"
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../../../firebase';
import { getAuth } from 'firebase/auth';


export default function ProgramsDisplay(props:{discover: boolean}) {

  const [programs, setPrograms] = useState<Array<programType>>([])

  useEffect(()=>{
      const fetchData = async () => {
        let newPrograms:Array<programType> = []
        if (props.discover) {
          const q = query(collection(firestore, "Programs"));
          const programsRef = await getDocs(q);
          programsRef.forEach((program)=>{
            const programData = {id: program.id, name: program.data().name, sessions: program.data().Sessions}
            newPrograms.push(programData)
          })
        }
        else {
          const q = query(collection(firestore, "Programs"), where("author", "==", getAuth().currentUser?.uid));
          const programsRef = await getDocs(q);
          programsRef.forEach((program)=>{
            const programData = {id: program.id, name: program.data().name, sessions: program.data().Sessions}
            newPrograms.push(programData)
          })
        }
        setPrograms(newPrograms)
    };
    fetchData();
  }, [])

  const renderProgram = useCallback(
    (program:{id: string, name: string, sessions: Array<sessionType>}, index: number)=>{
      return(
          <Program
            discover={props.discover}
            key={program.id}
            id = {program.id}
            index = {index}
            name = {program.name}
            >
          </Program>
      )
    },
    [programs, setPrograms]
  )

  return (
    <>
      <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3 '>
        {
          programs.map((e, index)=> renderProgram(e, index))
        }
      </div>
    </>
  )
}
