export default function Title({name, style}: {name: string, style: string | null}) {
  return (
    <h1 className={`text-center text-3xl mt-28 block mx-auto bg-[#dcdcdc] outline-transparent border-emerald-500 ${style}`}>{name}</h1>
  )
}
