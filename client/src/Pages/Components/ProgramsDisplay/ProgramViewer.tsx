import { useCallback, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import SessionViewer from "../Form/FormPages/SessionViewer"
import { exerciseType, sessionType } from '../Form/FormPages/ItemTypes'


export default function index(props:{programName: string, data: Array<sessionType>}) {

  const [sessions, setSessions] = useState(props.data)

  const slideLeft = () =>{
    let slider = document.getElementById('slider')
    if(slider == null){
      throw new Error("slider is null");
    }
    slider.scrollLeft = slider.scrollLeft - 380
  }
  const slideRight = () =>{
    let slider = document.getElementById('slider')
    if(slider == null){
      throw new Error("slider is null");
    }
    slider.scrollLeft = slider.scrollLeft + 380
    
  }

  const renderSession = useCallback(
    (session:{id: number, name:string, exerciseList: Array<exerciseType>})=>{
      return(
        <SessionViewer 
          id={session.id} 
          key={session.id} 
          session={session}>
        </SessionViewer>
      )
    },
    [sessions, setSessions]
  )

  return(
    <>

      <h1 className='text-center text-3xl mt-28 block mx-auto outline-transparent text-violet-700 border-violet-700'>{props.programName}</h1>

      <div className='relative flex justify-center items-center'>
          <MdChevronLeft onClick ={slideLeft} size={40} className='absolute left-0 z-10'></MdChevronLeft>
          <div id="slider" className='w-full overflow-x-scroll h-full scroll whitespace-nowrap scroll-smooth pb-12 flex'>
          {
            sessions.map((e)=> renderSession(e))
          }      
          </div>
          <MdChevronRight onClick = {slideRight} size={40} className='absolute right-0 '></MdChevronRight>
        </div>
      
      
      
    </>)
}

