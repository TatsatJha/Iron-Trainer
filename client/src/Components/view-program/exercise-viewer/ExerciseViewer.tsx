import { FC, useState } from 'react';
import { exerciseType } from '../../../types/ProgramTypes';

export const ExerciseViewer: FC<exerciseType> = ({ id, sets, reps, name, notes }) => {
  const [openNote, setOpenNote] = useState(false);

  return (
    <div
      id={`${id}`}
      className="flex flex-col border-b border-gray-300 hover:bg-gray-50 px-4 py-2 transition-colors duration-200 ease-in-out"
      onClick={() => setOpenNote(!openNote)}
    >
     {openNote ? 
     <>
      <h3 className='text-lg font-semibold text-gray-800 flex justify-between items-center'>
        Notes: 
      </h3>  
      <p className='text-sm text-gray-600'>{notes}</p>
     </>
     :
      <div className="">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="text-sm text-gray-600">
          <span>{sets} sets</span>
          <span className="mx-2">×</span>
          <span>{reps} reps</span>
        </div>
      </div>
      }

    </div>
  );
};
