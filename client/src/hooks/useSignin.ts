import {useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useSignin = ()=>{
    const [signInWithEmailAndPassword, user,loading, error] = useSignInWithEmailAndPassword(auth)
    const loginUser = useAuthStore((state)=> state.login)
    const signin = async(inputs: any) =>{
        try{
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password)

            if(userCred){
                const docRef = doc(firestore, "users", userCred.user.uid)
                const docSnap = await getDoc(docRef)
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
                loginUser(docSnap.data())
            }
        }
        catch(error){

        }
    }
    return {loading,error,signin}

}
export default useSignin