import React from 'react'

export default function Main(props: {name: string}) {
  return (
    <main className='h-screen w-screen bg-[#9DB2BF] mt-16' >{props.name}</main>
  )
}
