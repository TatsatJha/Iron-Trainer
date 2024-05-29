import { Outlet} from 'react-router-dom'
import Navbar from './components/navbar'

export default function App() {
  const url = document.URL
  return (
    <>
    {(url.includes("register")) ? <></> : <Navbar></Navbar>} 
      <Outlet></Outlet>
    </>
  )
}