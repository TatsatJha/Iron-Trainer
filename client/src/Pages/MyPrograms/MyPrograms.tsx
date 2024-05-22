import { useState } from 'react'
import Form from '../../Components/My Programs/ProgramForm';
import ProgramsDisplay from '../../Components/My Programs/ProgramsDisplay';


export default function MyPrograms() {

  const [formOpen, setFormOpen] = useState(false);

  const toggleOpen = () => setFormOpen(!formOpen);

  return(
    <main className='w-screen absolute top-20'>
      {formOpen? 
      <Form ></Form>
      :
      <>
        <ProgramsDisplay toggleOpen={toggleOpen}></ProgramsDisplay>
      </>
      }  
    </main>
  )

  
}
