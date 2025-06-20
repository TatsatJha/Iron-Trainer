export default function Title({name, style}: {name: string, style: string | null}) {
  return (
    <h1 className={`text-center text-4xl font-bold block mx-auto outline-none text-gray-800 bg-transparent p-4 ${style}`}>{name}</h1>
  )
}
