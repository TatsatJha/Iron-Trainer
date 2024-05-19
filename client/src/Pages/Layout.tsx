import { Outlet} from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

export default function Layout() {
  return (
    <>
    {/* set z-index to 50 Navbar should be top-most element */}
      <Navbar/>
      {/* Outlet routes to all of the pages of webapp */}
       <Outlet></Outlet>
    </>
  )
}
