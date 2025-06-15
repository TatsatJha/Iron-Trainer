import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Sessions from '../../components/common/sessions/Sessions.tsx';
import ProgramName from '../../components/create-program/program-name/ProgramName.tsx';
import { sessionType } from '../../types/ProgramTypes.ts';

export default function Form() {
  const [title, setTitle] = useState("Program Name");
  const [sessions, setSessions] = useState<Array<sessionType>>([
    { id: 0, exerciseList: [] },
  ]);

  const addSession = () => {
    const newArray = [
      ...sessions,
      {
        id: sessions.length,
        exerciseList: [
          { id: 0, name: "Exercise Name", sets: 0, reps: 0, notes: "" },
        ],
      },
    ];
    setSessions(newArray);
  };

  return (
    <>
      <div className='absolute w-screen top-36'>
        <ProgramName title={title} setTitle={setTitle}></ProgramName>
        <Sessions sessions={sessions} setSessions={setSessions}></Sessions>
      </div>

      <div className='flex justify-end bg-white shadow-inner w-full'>
      
        <div className="fixed bottom-0 right-10 flex gap-4 p-4">
          <button
            onClick={addSession}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-blue-300 transition-all"
          >
            Add Session
          </button>
          <Link to={"../my-programs"}>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
              Save
            </button>
          </Link>
        </div>
        

      </div>
    </>
  );
}
