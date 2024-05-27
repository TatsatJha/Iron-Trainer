export default function ProgramName({title, setTitle}: {title: string, setTitle: Function}) {
  return (
    <>
    <div className="group w-fit mx-auto mt-8">
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-center text-3xl block mx-auto outline-transparent text-emerald-500'></input>
      <span className="block max-w-0 group-hover:max-w-full group-focus-within:max-w-full transition-all duration-500 h-0.5 bg-emerald-400"></span>
    </div>
    </>
  )
}