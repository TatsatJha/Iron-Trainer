import Navbutton from "./Navbutton"

export const GuestNav = () => {
    return(<div className="top-0 fixed flex w-screen px-24 text-blue-600 font-bold justify-between z-50 bg-slate-50 shadow p-2 ">
      <h1>
        <Navbutton to = "/" name ="Iron-Trainer" style="text-2xl p-4 flex justify-start"/>
      </h1>
      <nav className='flex justify-evenly text-xl'>
        <Navbutton to = "/" name ="Home" style={"p-4 px-8"}></Navbutton>
        <Navbutton to = "/about" name ="About Us" style={"p-4 px-8"}></Navbutton>
        <Navbutton style={"px-6 m-2 border-2 border-blue-400 bg-blue-600 py-2 text-white rounded-lg text-lg font-bold"} name="Log in" to="/auth"></Navbutton>
      </nav>
    </div>
  )
}
