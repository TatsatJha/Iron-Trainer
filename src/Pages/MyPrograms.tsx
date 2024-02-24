import React, { useState } from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { MdElectricalServices } from 'react-icons/md';

let data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tempus libero, eget iaculis ligula. Suspendisse finibus tincidunt augue, vel sagittis sapien maximus et. Nullam sit amet metus in urna scelerisque ullamcorper. Curabitur sed pharetra sem, sit amet hendrerit turpis. In fringilla tempus purus, eget volutpat dolor fringilla ac. Nam id massa nec sapien tristique dictum. Vestibulum a urna efficitur, euismod arcu vitae, mollis erat. Donec a consectetur nulla. Nunc non mi a quam iaculis tincidunt scelerisque sit amet justo. Maecenas dolor lectus, venenatis eu ultricies quis, lobortis vitae dui. Aenean in dui sed elit bibendum rhoncus. Fusce dictum dui at hendrerit efficitur. Aenean orci dolor, condimentum quis augue eget, suscipit aliquet sapien"

export default function MyPrograms() {

  const [formOpen, setFormOpen] = useState(false);

  if(!formOpen)
  return(
    <>
      <main className='h-100% w-screen bg-[#9DB2BF] mt-16'>
        <div className='grid grid-cols-3'>
          <p className='border-solid m-12 border-black border-2 bg-[#DDE6ED] '>{data}</p>

        </div>
        <div onClick={() => setFormOpen(!formOpen)} className='mb-16'>
          <BsPlusSquare className='absolute right-24 text-4xl'></BsPlusSquare>
        </div>

      </main>
    </>
  )
  else
  return(
    <>
      <main className='h-100% w-screen bg-[#9DB2BF] mt-16'>
        
        <div onClick={() => setFormOpen(!formOpen)} className='absolute right-24 text-2xl mb-16'>
          Done
        </div>

      </main>
    </>
  )
}
