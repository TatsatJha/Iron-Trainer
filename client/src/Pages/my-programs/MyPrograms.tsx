import { Link } from 'react-router-dom';
import ProgramWidget from '../../components/my-programs/program-widget';
import ProgramsDisplay from '../../components/my-programs/programs-display';
import { BsPlusSquare } from 'react-icons/bs';


export default function MyPrograms() {


  return(
    <main className='w-screen absolute top-20'>
       <div className='w-5/6 md:w-[72rem] mx-auto'>
        <ProgramWidget></ProgramWidget>
        <ProgramsDisplay></ProgramsDisplay>
      </div>
      <Link className='mb-16' to={"../create-program"}>
        <BsPlusSquare className='absolute right-24 text-4xl'></BsPlusSquare>
      </Link>
    </main>
  )

  
}
