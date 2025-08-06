import { useCallback } from 'react';
import { ExerciseRunner } from './ExerciseRunner.tsx';
import { sessionType } from '../../../types/ProgramTypes';

export default function SessionRunner({ session }: { session: sessionType }) {
    const renderExercise = useCallback(
        (exercise: { name: string; reps: number; sets: number; notes: string }, index: number) => {
            return (
                <ExerciseRunner
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
        <div className='absolute w-screen top-36'>
            <div className="p-6 border rounded-lg shadow-md bg-white mb-6 w-1/2 mx-auto">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800">{session.name}</h2>
                    <span className="text-sm text-gray-500">{session.exerciseList.length} Exercises</span>
                </div>
                <ul className="space-y-4">
                    {session.exerciseList.map((exercise, index) => (
                        <li key={index}>{renderExercise(exercise, index)}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
