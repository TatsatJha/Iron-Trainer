import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { useState } from "react"
import useAuthStore from "../../store/authStore"
import { Navigate } from "react-router-dom"

export default function Auth(){
  const [register, setRegister] = useState(false)
  const authUser = useAuthStore (state => state.user)
  if(authUser)return <Navigate to="/App"/>

  return(
    register ? <SignUp setRegister = {setRegister}></SignUp> : <SignIn setRegister = {setRegister}></SignIn>
  ) 
}