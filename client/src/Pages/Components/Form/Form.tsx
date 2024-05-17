import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react'
import ProgramName from './FormPages/ProgramName.tsx';
import ExerciseBuilder from './FormPages/ExerciseBuilder.tsx';
import FormNavButton from './FormComponents/FormNavButton.tsx';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { exerciseType, sessionType } from './FormPages/ItemTypes.ts';


export default function Form() {

  const [title, settitle] = useState("Program Name")
  

  const [sessions, setSessions] = useState<Array<sessionType>>([{id: 0, name: "", exerciseList:[]}])


  const slideLeft = () =>{
    let slider = document.getElementById('slider')
    if(slider == null){
      throw new Error("slider is null");
    }
    slider.scrollLeft = slider.scrollLeft - 380
  }
  const slideRight = () =>{
    let slider = document.getElementById('slider')
    if(slider == null){
      throw new Error("slider is null");
    }
    slider.scrollLeft = slider.scrollLeft + 380
    
  }
  const addSession = () => {
    setSessions([...sessions, {id: sessions.length+1, name:"", exerciseList:[]}])
  }
  
  const renderSession = useCallback(
    (session:{id: number})=>{
      return(
        <ExerciseBuilder 
          id={session.id} 
          key={session.id}
          sessions={sessions} 
          setSessions={setSessions}>
        </ExerciseBuilder>
      )
    },
    [sessions, setSessions]
  )

  const saveProgram = async ()=>{
    const data = JSON.stringify({name: title, sessions: JSON.stringify(sessions)})
    console.log(data)
    const response = await fetch("http://localhost:3000/api/v1/programs", {
      method: "POST",
      mode: "cors",
      headers:{
        "Content-Type": "application/json"
      },
      body: data
    })
    
    return response;
  }

  return(
    <>

      <input type='text' value={title} onChange={(e )=>settitle(e.target.value)} className='text-center text-3xl mt-28 block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'></input>

      <button onClick={addSession} className='text-lg block ml-auto'> Add Session </button>

      <div className='relative flex justify-center items-center'>
          <MdChevronLeft onClick ={slideLeft} size={40} className='absolute left-0 z-10'></MdChevronLeft>
          <div id="slider" className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex'>
          {
            sessions.map((e)=> renderSession(e))
          }      
          </div>
          <MdChevronRight onClick = {slideRight} size={40} className='absolute right-0 '></MdChevronRight>
        </div>
      
      
      <button onClick={saveProgram}> SAVE PROGRAM </button>
    </>
  )
}
