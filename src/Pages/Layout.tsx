import React from 'react'
import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

export default function Layout() {
  return (
    <>
    <div className='bg-[#DDE6ED] top-0 fixed w-screen px-24 text-violet-800 font-bold border-b-violet-800 border-[2px] '>
            <Navbar/>
        </div>
       <Outlet></Outlet>
    </>
  )
}
