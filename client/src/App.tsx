import { Outlet, Navigate} from 'react-router-dom'
import Navbar from './components/navbar'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export default function App() {
  const url = document.URL
  const [authUser] = useAuthState(auth);
  if(!authUser)return <Navigate to="/auth"/>

  return (
    <div>
    {(url.includes("register") || url.includes("login")) ? <></> : <Navbar mode='app'></Navbar>} 
      <Outlet></Outlet>
    </div>
  )
}