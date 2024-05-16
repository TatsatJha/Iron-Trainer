export default function Program(props:{name: string, data: Array<{id: number, name:string, bottomRep: number, topRep: number}>, setSelected: Function, index: number}) {
  return (
    <div className='bg-violet-400 border-2 border-violet-500 m-4' onClick={()=>props.setSelected(props.index)}>
        <h1>{props.name}</h1>
    </div>
  )
}
