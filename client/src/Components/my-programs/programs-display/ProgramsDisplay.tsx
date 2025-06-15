import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import Program from './Program';
import {programType, sessionType} from "../../../types/ProgramTypes"
import ProgramWidget from '../program-widget';
import { Link } from 'react-router-dom';


export default function ProgramsDisplay(props:{discover:boolean}) {

  const [programs, setPrograms] = useState<Array<programType>>([])

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/programs")
      const programs = await response.json();
      console.log(programs)
      setPrograms(programs)
    };
    fetchData();
  }, [])

  const renderProgram = useCallback(
    (program:{id: number, name: string, sessions: Array<sessionType>}, index: number)=>{
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
