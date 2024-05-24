import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import img from "../../../assets/default-backdrop.jpg"
import Program from './Program';
import {programType, sessionType} from "../ProgramTypes"
import ProgramWidget from '../ProgramWidget';
import { Link } from 'react-router-dom';


export default function ProgramsDisplay() {

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
    <ProgramWidget></ProgramWidget>
    <div className='grid grid-cols-3 mx-32'>
        {
          programs.map((e, index)=> renderProgram(e, index))
        }
      </div>
      
      <Link className='mb-16' to={"../create-program"}>
        <BsPlusSquare className='absolute right-24 text-4xl'></BsPlusSquare>
      </Link>

    </>
  )
}
