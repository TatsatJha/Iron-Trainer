import React, { useState } from 'react'
import { sessionType } from '../../../types/ProgramTypes';
import SessionViewer from '../../view-program/session-viewer';

export default function Selector({name, sessions, select, setSelect, running, setRunning}:{name:string, sessions:sessionType[], select:number, setSelect:React.Dispatch<React.SetStateAction<number>>, running:boolean, setRunning:React.Dispatch<React.SetStateAction<boolean>>}) {


  return (
    <div>
    <h1 className='text-3xl text-gray-800 font-bold mt-16 p-8'>
        You are Running: {name}
    </h1>
    <h2 className='text-xl px-8 pb-16 text-gray-600'>
        Today's Training Sessions <span className=''><b>{sessions[select].name}</b></span> 
    </h2>
    {}
    <div className='max-w-lg mx-auto flex'>
        <SessionViewer id={3} session={sessions[select]}></SessionViewer>
    </div>
    <div className='flex fixed bottom-4 right-16'>
        <button
            onClick={() => {
                setSelect((prev) => (prev + 1) % sessions.length);
            }}
            className='bg-blue-500 mx-2 text-white px-4 py-2 h-fit rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300'
            > Change Session 
        </button>
        <button className=' bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300' onClick={()=>{setRunning(true);}}>
        Run
        </button>
    </div>
</div>
  )
}
