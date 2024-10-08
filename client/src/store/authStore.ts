import {create} from "zustand";

const useAuthStore = create((set: any)=>({
    user:JSON.parse(localStorage.getItem("user-info")!),
    login:(user: any)=> set({user}),
    logout:()=> set({user:null}),
    setUser: (user: any)=> set (user)
}))
export default useAuthStore