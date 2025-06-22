import React from 'react'
import Timer from './Timer'
import SessionViewer from '../../view-program/session-viewer';
import { sessionType } from '../../../types/ProgramTypes';

export default function Runner({name, sessions, select, setSelect, running, setRunning}:{name:string, sessions:sessionType[], select:number, setSelect:React.Dispatch<React.SetStateAction<number>>, running:boolean, setRunning:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div>
        <div className='max-w-lg mx-auto flex'>
            <SessionViewer id={3} session={sessions[select]}></SessionViewer>
        </div>

        <div className='flex fixed bottom-4 right-16'>
            <button
                onClick={() => {
                    setRunning(false);
                }}
                className='bg-blue-500 mx-2 text-white px-4 py-2 h-fit rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300'
            > 
                Cancel 
            </button>
            <button 
                onClick={()=>{console.log("Finish")}}
                className=' bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300'
            >
                Finish
            </button>
        </div>
        {running && <Timer></Timer>}
    </div>
  )
}
