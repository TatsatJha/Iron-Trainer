import ProgramsDisplay from '../../components/my-programs/programs-display'
import { FaCompass } from 'react-icons/fa';
import Friends from '../../components/discover/Friends';

export default function Discover() {



  return (
    <div className='w-screen absolute top-20'>
      <div className='flex items-center justify-center mb-4 mt-16'>
        <FaCompass className='text-3xl' />
        <h1 className='text-3xl font-bold ml-4'>Discover Programs</h1>
      </div>
      <ProgramsDisplay discover={true}></ProgramsDisplay>
      <div className='border-t border-gray-300 my-16 mx-16'></div>
      <Friends></Friends>
    </div>
  )
}
