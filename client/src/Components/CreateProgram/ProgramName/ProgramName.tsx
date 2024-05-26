export default function ProgramName({title, setTitle}: {title: string, setTitle: Function}) {
  return (
    <>
    <div className="group">
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-center text-3xl block mx-auto outline-transparent text-violet-700'></input>
      <span className="block max-w-0 group-hover:max-w-full group-focus-within:max-w-full transition-all duration-500 h-0.5 bg-violet-600"></span>
    </div>
    </>
  )
}