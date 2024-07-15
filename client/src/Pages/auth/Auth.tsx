import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { useState } from "react"

export default function Auth(){
  const [register, setRegister] = useState(false)
  return(
    register ? <SignUp setRegister = {setRegister}></SignUp> : <SignIn setRegister = {setRegister}></SignIn>
  ) 
}