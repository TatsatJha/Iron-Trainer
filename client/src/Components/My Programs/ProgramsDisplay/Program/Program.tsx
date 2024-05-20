import image from "../../../../assets/default-backdrop.jpg"

export default function Program(props:{name: string, setSelected: Function, index: number}) {
  return (
    <div className='bg-[#ffffffb3] m-4 rounded-xl' onClick={()=>props.setSelected(props.index)}>
      <img className="rounded-xl"src={image}></img>
      <h1 className="pt-4 text-center text-xl">{props.name}</h1>
      <div className="flex p-2 justify-between">
        <h2 className="">Made by: user</h2>
        <h3> some stars</h3>
      </div>
      <div className="flex justify-evenly">
        <span>tag1</span>
        <span>tag2</span>
        <span>tag3</span>
      </div>
      <h4 className="text-sm p-2 text-gray-500">
        some number of people using the program
      </h4>
    </div>
  )
}
