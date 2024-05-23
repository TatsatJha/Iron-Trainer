export default function ProgramName({title, setTitle}: {title: string, setTitle: Function}) {
  return (
    <>
    <div className=''>
    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className='text-center text-3xl block mx-auto outline-transparent hover:border-b-2 ease-in-out text-violet-700 border-violet-700'></input>
      </div>
      
    </>
  )
}