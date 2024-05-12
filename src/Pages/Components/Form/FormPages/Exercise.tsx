import React, { MouseEventHandler, useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FormQuestion from '../FormComponents/FormQuestion';
import index from '../Form';


export default function Exercise(props:{exercises: Array<{id: number}>, id: number, setExercises: Function}) {

  const deleteExercise = ()=>{
    const newList = props.exercises.filter((item) => item.id !== props.id);
    props.setExercises(newList);

  }
  
  const drag = (event: any)=>{
    // stores order of dragged item into dataTransfer object
    event.dataTransfer.setData("text", event.currentTarget.id)
  }

  // const drop = async (event: any)=>{
    
  //   event.preventDefault();

  //   // access order of dragged item
  //   const draggedIndex = event.dataTransfer.getData("text");
  //   const droppedIndex = event.currentTarget.id

  //   let newArray = props.exercises.map((e)=>e)

  //   if(draggedIndex < droppedIndex){
  //     console.log("moving item down in the list")
  //     for (let index = 0; index < props.exercises.length; index++) {
  //       if(index >= draggedIndex && index < droppedIndex){
  //         //move these items up
  //         const element = props.exercises[index+1]
  //         // const elementValue = document.getElementById(element.props.id)!.value
  //         newArray[index] = <Exercise id={index} exercises={element.props.exercises} setExercises={element.props.setExercises} setExerciseCount={element.props.setExerciseCount} key={index}></Exercise>
  //         newArray[index] = props.exercises[index+1]
  //       }
  //       else if(index == droppedIndex){
  //         newArray[index] = props.exercises[draggedIndex]
  //         //move draggged item to droppedIndex
  //       }
  //     }
  //   }
  //   else if(draggedIndex > droppedIndex ){
  //     console.log("moving item up in the list")
  //     for(let index = 0; index < props.exercises.length; index++){
  //       if(index <= draggedIndex && index > droppedIndex){
  //         //these items move down
  //         newArray[index] = props.exercises[index-1]
  //       }
  //       else if(index == droppedIndex){
  //         newArray[index] = props.exercises[draggedIndex]
  //       }
  //     }
  //   }
  //   else{
  //     return
  //   }
  //   props.setExercises(newArray);

  //   console.log("newly set exercises,", props.exercises)

  // }
  

  const allowDrop = (event: any)=>{
    event.preventDefault();
  }
  return ( 
    <div 
    id={`${props.id}`} 
    onDragStart={drag}
    // onDrop={drop} 
    onDragOver={allowDrop} 
    draggable={true} 
    className={
      `w-[45vw] mx-[2.5vw] p-4 rounded-xl border-black border-2 border-solid text-center inline-block bg-violet-300 shadow-xl mt-8`}
    >
      <span ><BsThreeDotsVertical className='cursor-grab active:cursor-grabbing inline text-xl'></BsThreeDotsVertical></span>
      <FormQuestion question={"Exercise Name"} type='text'></FormQuestion>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>x</span>
      <FormQuestion question='' type='number'></FormQuestion>
      <span>—</span>
      <FormQuestion question='' type='number'></FormQuestion>
      <FormQuestion  question='Descriptions' type='text-area'></FormQuestion>  
      <button ><FaTrashAlt onClick={deleteExercise} className='text-sm'></FaTrashAlt></button>
    </div >
  )
}
