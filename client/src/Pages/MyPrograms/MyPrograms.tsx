import { useState } from 'react'
import Form from '../../Components/MyPrograms/ProgramForm';
import ProgramsDisplay from '../../Components/MyPrograms/ProgramsDisplay';


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
