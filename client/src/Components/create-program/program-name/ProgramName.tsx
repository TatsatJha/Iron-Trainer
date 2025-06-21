export default function ProgramName({name, setName}: {name: string, setName: Function}) {
  return (
    <>
    <div className="group mx-auto mt-8">
      <input 
        type='text' 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className='text-center text-4xl font-bold block mx-auto outline-none text-gray-800 bg-transparent p-4 w-screen'
        placeholder="Enter Program Name"
      />

    </div>
    </>
  )
}