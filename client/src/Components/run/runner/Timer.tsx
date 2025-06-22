import { Pause, PlayArrow } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [pause, setPause] = useState(false);

    const handlePause = () => {
        setPause(!pause);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!pause) {
                setSeconds(prevSeconds => prevSeconds + 1);
            }
        }, 1000);
    
      return () => {clearInterval(interval)};
    }, [pause])
    
  return (
    <div className='flex items-center justify-center gap-2 text-md bg-blue-500 text-white p-2 rounded-lg shadow-md w-fit h-fit'>
        {
            pause ?  <PlayArrow onClick={handlePause}></PlayArrow> : <Pause onClick={handlePause}></Pause>   
        }
        <div>{String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}</div>
    </div>
  )
}
