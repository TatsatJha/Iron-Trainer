import React from 'react'
import Timer from './Timer'
import SessionRunner from './SessionRunner';
import { sessionType } from '../../../types/ProgramTypes';
import { doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firestore } from '../../../firebase';
import { collection, setDoc } from 'firebase/firestore';

export default function Runner({ name, sessions, select, running, setRunning }: { name: string, sessions: sessionType[], select: number, setSelect: React.Dispatch<React.SetStateAction<number>>, running: boolean, setRunning: React.Dispatch<React.SetStateAction<boolean>> }) {

    const handleFinish = () => {
        setRunning(false);
        // store the session in a collection called "Sessions"
        const uid = getAuth().currentUser?.uid;
        const sessionRef = doc(collection(firestore, "Sessions"), uid + "/" + name);
        setDoc(sessionRef, {
            "name": name,
            "author": uid,
            "Sessions": { ...sessions }
        });
    }

    return (
        <div>

            <div className='mx-auto flex'>
                <SessionRunner session={sessions[select]}></SessionRunner>
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
                    onClick={() => { handleFinish() }}
                    className=' bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300'
                >
                    Finish
                </button>
            </div>
            {running && <Timer></Timer>}
        </div>
    )
}
