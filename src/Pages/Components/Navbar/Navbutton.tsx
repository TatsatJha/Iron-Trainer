import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbutton(props: {to: string, name: string}) {
  return (
    <Link to={props.to} className='p-4 px-12 '>{props.name}</Link>
  )
}
