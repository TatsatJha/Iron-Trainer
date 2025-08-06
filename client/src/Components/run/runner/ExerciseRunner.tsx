import { FC, useState } from 'react';
import { exerciseType } from '../../../types/ProgramTypes';

export const ExerciseRunner: FC<exerciseType> = ({ id, name, notes }) => {
    const [openNote, setOpenNote] = useState(false);

    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");


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
                        <input onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded-md w-12 mx-2 p-1 px-3"
                            onChange={(e) => setSets(e.target.value)}
                            name="sets" value={sets}></input>sets
                        <span className="mx-2">×</span>
                        <input onClick={(e) => e.stopPropagation()}
                            className="border border-gray-300 rounded-md w-12 mx-2 p-1 px-3"
                            onChange={(e) => setReps(e.target.value)}
                            name="reps" value={reps}></input>reps
                    </div>
                </div>
            }

        </div>
    );
};
