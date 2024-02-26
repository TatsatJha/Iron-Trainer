import React, { useState } from 'react'
import { MdElectricalServices } from 'react-icons/md';
import Form from './Components/Form';
import ProgramsDisplay from './Components/ProgramsDisplay';


export default function MyPrograms() {

  const [formOpen, setFormOpen] = useState(false);

  const toggleOpen = () => setFormOpen(!formOpen);

  return(
    <main className='h-100% w-screen bg-[#9DB2BF] mt-16 '>
      {formOpen? 
      <Form toggleOpen={toggleOpen}></Form>
      :  
      <ProgramsDisplay toggleOpen={toggleOpen}></ProgramsDisplay>
      }  
    </main>
  )

  
}
