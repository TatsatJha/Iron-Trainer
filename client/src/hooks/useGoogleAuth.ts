import {auth, firestore} from "../firebase";
import useAuthStore from '../store/authStore';
import { doc, setDoc } from 'firebase/firestore';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const handleGoogle = async ()=>{
    const loginUser = useAuthStore((state)=> state.login)
    const provider = new GoogleAuthProvider();

    try{
      const newUser = await signInWithPopup(auth, provider)

      if(newUser){
        const userDoc ={
          uid:newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email!.split('@')[0],
          name: newUser.user.displayName,
          bio:"",
          profilePicURL: newUser.user.photoURL,
          programs: "",
          savedPrograms:"",
          createdAt:Date.now()
        }
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc)
      }
    }catch(error){
      console.error(error)
    }
  }