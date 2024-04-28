import React, { MouseEventHandler, useState } from 'react'
import ProgramName from './FormPages/ProgramName';
import ExerciseBuilder from './FormPages/ExerciseBuilder.tsx';
import FormNavButton from './FormComponents/FormNavButton';


export default function index(props:{toggleOpen: MouseEventHandler}) {

  // const [step, setStep] = useState(0);

  // const nextStep = () => setStep(step+1);
  // const prevStep = () => setStep(step-1);

  return(
    <>
      {
      // step == 0 ? 
      // <>
      //   <ProgramName></ProgramName> 
      //   <FormNavButton styling = "left-24" label = "Cancel" navFunction = {props.toggleOpen}></FormNavButton>
      //   <FormNavButton styling = "right-24" label = "Next" navFunction = {nextStep}></FormNavButton>
      // </>
      // : 
      // step == 1 ? 
      // <>
      
      //   <FormNavButton styling = "left-24" label = "Back" navFunction = {prevStep}></FormNavButton>
      //   <FormNavButton styling = "right-24" label = "Next" navFunction = {nextStep}></FormNavButton>
      // </>
      // :  
      // step == 2 ?
      // <>
      //   <ExerciseBuilder></ExerciseBuilder> 
      //   <FormNavButton styling = "left-24" label = "Back" navFunction = {prevStep}></FormNavButton>
      //   <FormNavButton styling = "right-24" label = "Next" navFunction = {nextStep}></FormNavButton>
      // </>
      // :
      // <>
      // {/* CHANGE TOGGLE OPEN TO A PROPER SUBMIT FUNCTION */}
      //   <FormNavButton styling = "left-24" label = "Back" navFunction = {prevStep}></FormNavButton>
      //   <FormNavButton styling = "right-24" label = "Done" navFunction = {props.toggleOpen}></FormNavButton>
      // </>
      }
      <ExerciseBuilder></ExerciseBuilder>
      
    </>
  )
}
