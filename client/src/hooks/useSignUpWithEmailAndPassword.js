import { useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import {auth, firestore} from "../firebase/"
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { useSnackbar } from '@mui/base/useSnackbar';

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useSnackbar();

    const signup = async (inputs)=>{
        const usersRef = collection(firestore, "users");

		const q = query(usersRef, where("username", "==", inputs.username));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			useSnackbar("Error", "Username already exists", "error");
			return;
		}
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if(!newUser && error){
                
                return
            }
            if(newUser){
                const userDoc ={
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    name:inputs.name,
                    bio:"",
                    profilePicURL:"",
                    programs: "",
                    savedPrograms:"",
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc)
                localStorage.setItem('user-info', JSON.stringify(userDoc))
            }
        } catch (error) {
			showToast("Error", error.message, "error");
        }
    }
  return {loading, error, signup}
}

export default useSignUpWithEmailAndPassword