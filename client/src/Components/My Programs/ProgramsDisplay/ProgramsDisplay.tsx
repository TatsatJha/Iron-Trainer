import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import Program from './Program';
import ProgramViewer from "./ProgramViewer"
import {programType, sessionType} from "../ProgramForm/ProgramTypes"
import ProgramWidget from '../ProgramWidget';


export default function ProgramsDisplay(props: {toggleOpen: MouseEventHandler}) {

  const [programs, setPrograms] = useState<Array<programType>>([])
  const [selected, setSelected] = useState(-1)

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/programs")
      const programs = await response.json();
      setPrograms(programs)
      console.log(programs)
    };
    fetchData();
  }, [])

  const renderProgram = useCallback(
    (program:{id: number, name: string, sessions: Array<sessionType>}, index: number)=>{
      return(
        <Program
          key={program.id}
          index = {index}
          name = {program.name}
          setSelected = {setSelected}>
        </Program>
      )
    },
    [programs, setPrograms]
  )

  return (
    <>
    {
      (selected >=0 ) ? 
      <>
        <ProgramViewer
        programName = {programs[selected].name}
        data = {programs[selected].sessions}>
        </ProgramViewer>
      </>
      :
      <>
      <ProgramWidget></ProgramWidget>
      <div className='grid grid-cols-3 mx-32'>
          {
            programs.map((e, index)=> renderProgram(e, index))
          }
        </div>
        <div onClick={props.toggleOpen} className='mb-16'>
          <BsPlusSquare className='absolute right-24 text-4xl'></BsPlusSquare>
        </div>
      </>
      
    }
    </>
  )
}
