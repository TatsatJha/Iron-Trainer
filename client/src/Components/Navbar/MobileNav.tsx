import { IoReorderThreeOutline } from "react-icons/io5";
import Navbutton from "./Navbutton";

export const MobileNav = () => {
    return(<div className="flex top-0 fixed w-screen align-middle justify-between z-50 bg-white">
        <h1>
          <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
        </h1>
        <button className="px-6 h-fit my-auto py-2 bg-blue-600 text-white rounded-lg m-2 font-bold"> Download App</button>
        <button className="text-3xl pr-6">
            <IoReorderThreeOutline></IoReorderThreeOutline>
        </button>
      </div>
      )
}
  