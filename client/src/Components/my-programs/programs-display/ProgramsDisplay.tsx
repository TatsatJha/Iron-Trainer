import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import Program from './Program';
import {programType, sessionType} from "../../../types/ProgramTypes"
import ProgramWidget from '../program-widget';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../../../firebase';


export default function ProgramsDisplay(props:{discover:boolean}) {

  const [programs, setPrograms] = useState<Array<programType>>([])

  useEffect(()=>{
      const fetchData = async () => {
        const q = query(collection(firestore, "Programs"));
        const programsRef = await getDocs(q);
        let newPrograms:Array<programType> = []
        programsRef.forEach((program)=>{
          const programData = {id: program.id, name: program.data().name, sessions: program.data().Sessions}
          newPrograms.push(programData)
      })
      setPrograms(newPrograms)
    };
    fetchData();
  }, [])

  const renderProgram = useCallback(
    (program:{id: string, name: string, sessions: Array<sessionType>}, index: number)=>{
      return(
          <Program
            key={program.id}
            id = {program.id}
            index = {index}
            name = {program.name}>
          </Program>
      )
    },
    [programs, setPrograms]
  )

  return (
    <>
      <div className='w-5/6 md:w-[72rem] mx-auto'>
        {
          props.discover ? <></> :
        <ProgramWidget></ProgramWidget>}
        <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3 '>
          {
            programs.map((e, index)=> renderProgram(e, index))
          }
        </div>
      </div>
      {props.discover ?  
      <></>
      :
      <Link className='mb-16' to={"../create-program"}>
        <BsPlusSquare className='absolute right-24 text-4xl'></BsPlusSquare>
      </Link>
      }      
    </>
  )
}
