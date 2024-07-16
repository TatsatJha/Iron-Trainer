import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export default function Auth(){
  const [register, setRegister] = useState(false)
  const [authUser] = useAuthState(auth);
  if(authUser)return <Navigate to="/App"/>

  return(
    register ? <SignUp setRegister = {setRegister}></SignUp> : <SignIn setRegister = {setRegister}></SignIn>
  ) 
}