import { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import Program from './Program';
import ProgramViewer from "./ProgramViewer"


export default function ProgramsDisplay(props: {toggleOpen: MouseEventHandler}) {

  interface program{
    id: number,
    name: string,
    sessions: Array<{id: number, name:string, bottomRep: number, topRep: number}>
  }

  const [programs, setPrograms] = useState<Array<program>>([])
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
    (program:{id: number, name:string, sessions: Array<{id: number, name:string, bottomRep: number, topRep: number}>}, index: number)=>{
      return(
        <Program
          key={program.id}
          index = {index}
          name = {program.name}
          data = {program.sessions}
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
        name = {programs[selected].name}
        data = {programs[selected].sessions}>
        </ProgramViewer>
      </>
      :
      <>
      <div className='grid grid-cols-3'>
          {/* <p className='border-solid m-12 border-black border-2 bg-[#DDE6ED] '>{}</p> */}
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
