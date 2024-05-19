export default function Program(props:{name: string, setSelected: Function, index: number}) {
  console.log(props)
  return (
    <div className='bg-violet-400 border-2 border-violet-500 m-4' onClick={()=>props.setSelected(props.index)}>
        <h1>{props.name}</h1>
    </div>
  )
}
