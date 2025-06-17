import { FC } from 'react';
import { exerciseType } from '../../../types/ProgramTypes';

export const ExerciseViewer: FC<exerciseType> = ({ id, sets, reps, name, notes }) => {
  return (
    <div
      id={`${id}`}
      className="flex flex-col border-b border-gray-300 py-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="text-sm text-gray-600">
          <span>{sets} sets</span>
          <span className="mx-2">×</span>
          <span>{reps} reps</span>
        </div>
      </div>
      {notes && (
        <p className="mt-2 text-sm text-gray-500">Notes: {notes}</p>
      )}
    </div>
  );
};
