import React, { MouseEventHandler, useState } from 'react'
import ProgramName from './FormPages/ProgramName';
import ExerciseBuilder from './FormPages/ExerciseBuilder.tsx';
import FormNavButton from './FormComponents/FormNavButton';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


export default function index(props:{toggleOpen: MouseEventHandler}) {

  // const [step, setStep] = useState(0);

  // const nextStep = () => setStep(step+1);
  // const prevStep = () => setStep(step-1);
  const [title, settitle] = useState("Program Name")
  const [sessions, setSessions] = useState(["Day 1"])

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
  

  return(
    <>

      <input type='text' value={title} onChange={(e )=>settitle(e.target.value)} className='text-center text-3xl mt-28 block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'></input>

      <button onClick={() => setSessions([...sessions, "Day " + (sessions.length+1)])} className='text-lg block ml-auto'> Add Session </button>

      <div className='relative flex justify-center items-center'>
          <MdChevronLeft onClick ={slideLeft} size={40} className='absolute left-0 z-10'></MdChevronLeft>
          <div id="slider" className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex'>
          {
            sessions.map((title)=><ExerciseBuilder sessionTitle={title} ></ExerciseBuilder>)
          }      
          </div>
          <MdChevronRight onClick = {slideRight} size={40} className='absolute right-0 '></MdChevronRight>
        </div>
      
      
      
    </>
  )
}
