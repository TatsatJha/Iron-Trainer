import React from 'react'

export default function Main(props: {name: string}) {
  return (
    <main className='min-h-screen bg-white mt-16' >{props.name}</main>
  )
}
