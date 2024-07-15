import { Outlet, Navigate} from 'react-router-dom'
import Navbar from './components/navbar'
import useAuthStore from "./store/authstore.js"


export default function App() {
  const url = document.URL
  const authUser = useAuthStore (state => state.user)
  if(!authUser)return <Navigate to="/login"/>
  return (
    <div>
    {(url.includes("register") || url.includes("login")) ? <></> : <Navbar mode='app'></Navbar>} 
      <Outlet></Outlet>
    </div>
  )
}