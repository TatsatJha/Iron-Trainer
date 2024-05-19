export default function Program(props:{name: string, setSelected: Function, index: number}) {
  console.log(props)
  return (
    <div className='bg-[#ffffffb3] border-2 border-violet-500 m-4' onClick={()=>props.setSelected(props.index)}>
      <div className="bg-black w-full h-40">SOME IMAGE</div>
      <h1 className="p-4 text-center text-xl">{props.name}</h1>
      <div className="flex p-2 justify-between">
        <h2 className="">Made by: user</h2>
        <h3> some stars</h3>
      </div>
      <div className="flex justify-evenly">
        <span>tag1</span>
        <span>tag2</span>
        <span>tag3</span>
      </div>
      <></>
    </div>
  )
}
