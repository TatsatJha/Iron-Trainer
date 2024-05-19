import { Link } from 'react-router-dom'

export default function Navbutton({to, name, style}: {to: string, name: string, style: string}) {
  return (
    <Link to={to} className={style}>{name}</Link>
  )
}
