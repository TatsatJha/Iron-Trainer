export default function ProgramName({title, setTitle}: {title: string, setTitle: Function}) {
  return (
    <>
    <div className="group w-fit mx-auto mt-8">
      <input 
        type='text' 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className='text-center text-4xl font-bold block mx-auto outline-none text-gray-800 bg-transparent p-4'
        placeholder="Enter Program Name"
      />

    </div>
    </>
  )
}