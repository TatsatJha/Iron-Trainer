import { useCallback } from 'react';
import { ExerciseViewer } from '../exercise-viewer';
import { sessionType } from '../../../types/ProgramTypes';

export interface Item {
  id: number;
}
export interface ContainerState {
  exercises: Item[];
}

export default function SessionViewer(props: { session: sessionType; id: number }) {
  const renderExercise = useCallback(
    (exercise: { name: string; reps: number; sets: number; notes: string }, index: number) => {
      return (
        <ExerciseViewer
          key={index}
          id={index}
          sets={exercise.sets}
          reps={exercise.reps}
          name={exercise.name}
          notes={exercise.notes}
        />
      );
    },
    []
  );

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mb-6 w-full mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">{props.session.name}</h2>
        <span className="text-sm text-gray-500">{props.session.exerciseList.length} Exercises</span>
      </div>
      <ul className="space-y-4">
        {props.session.exerciseList.map((exercise, index) => (
          <li key={index}>{renderExercise(exercise, index)}</li>
        ))}
      </ul>
    </div>
  );
}
