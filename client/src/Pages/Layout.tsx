import { Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export default function Layout() {
  return (
    <>
    {/* set z-index to 50 Navbar should be top-most element */}
      <div className='bg-[#DDE6ED] top-0 fixed w-screen px-24 text-violet-800 font-bold border-b-violet-800 border-[2px] z-50'>
        <Navbar/>
      </div>
      {/* Outlet routes to all of the pages of webapp */}
       <Outlet></Outlet>
    </>
  )
}
