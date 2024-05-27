export default function Title({name, style}: {name: string, style: string | null}) {
  return (
    <h1 className={`text-center text-3xl block mx-auto outline-transparent text-emerald-500 mt-8 ${style}`}>{name}</h1>
  )
}
