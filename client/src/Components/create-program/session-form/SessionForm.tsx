import React, { useState, useRef, Fragment, useEffect } from "react";
import { FaPlus, FaTrashAlt, FaGripLines, FaTimes} from "react-icons/fa";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Popover,PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { sessionType } from "../../../types/ProgramTypes";
import { useParams } from "react-router-dom";

const ItemType = "EXERCISE";

interface Exercise {
  id: number,
  name: string;
  sets: number;
  reps: number;
  notes: string;
}

interface DragItem {
  index: number;
  type: string;
}

interface DraggableExerciseProps {
  exercise: Exercise;
  index: number;
  moveExercise: (from: number, to: number) => void;
  updateExercise: (index: number, field: keyof Exercise, value: string) => void;
  removeExercise: (index: number) => void;
}

function DraggableExercise({
  exercise,
  index,
  moveExercise,
  updateExercise,
  removeExercise,
}: DraggableExerciseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop<DragItem>({
    accept: ItemType,
    hover(item) {
      if (!ref.current || item.index === index) return;
      moveExercise(item.index, index);
      item.index = index;
    },
  });

  const [, drag] = useDrag({
    type: ItemType,
    item: { index },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="bg-white text-gray-800 rounded-lg shadow px-4 py-2 space-y-2 w-full transition-transform duration-200  hover:shadow-lg "
    >
      <div className="cursor-grab text-gray-400 hover:text-gray-600 flex justify-center">
          <FaGripLines className="p-0 w-3 h-3" />
          <FaGripLines className="p-0 w-3 h-3" />
      </div>
      <div className="flex justify-between items-start">
        <div className="flex-1 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Exercise name"
            className="border border-gray-300  rounded px-2 py-1"
            value={exercise.name}
            onChange={(e) => updateExercise(index, "name", e.target.value)}
          />
          <div className="flex justify-between gap-2">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-2 bg-gray-100 px-3 rounded hover:bg-gray-200 w-fit text-base">
                <span>{exercise.sets || "__"}</span>
                <span className="mx-1">×</span>
                <span>{exercise.reps || "__"}</span>
              </PopoverButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute z-10 mt-2 bg-white border border-gray-300 rounded shadow-lg p-3 w-48">
                  <div className="flex flex-col gap-2">
                    <input
                      type="number"
                      placeholder="Sets"
                      className="border border-gray-300 rounded px-2 py-1"
                      value={exercise.sets}
                      onChange={(e) => updateExercise(index, "sets", e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Reps"
                      className="border border-gray-300 rounded px-2 py-1"
                      value={exercise.reps}
                      onChange={(e) => updateExercise(index, "reps", e.target.value)}
                    />
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="text-sm text-gray-600 hover:underline flex items-center gap-1">
                Notes
              </PopoverButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute z-10 mt-2 bg-white border border-gray-300 rounded shadow-lg p-2 w-64">
                  <textarea
                  placeholder="Write your notes here..."
                  className="w-full h-24 border border-gray-300 rounded p-2"
                  value={exercise.notes}
                  onChange={(e) => updateExercise(index, "notes", e.target.value)}
                  />
                </PopoverPanel>
              </Transition>
            </Popover>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2 pl-2">
          <button
            onClick={() => removeExercise(index)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Remove exercise"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SessionForm({id, sessions, setSessions}:{id: number, sessions: Array<sessionType>, setSessions:Function}) {
  const [exercises, setExercises] = useState<Exercise[]>([
    {id: 0, name: "", sets: 0, reps: 0, notes: "" },
  ]);
  const [title, setTitle] = useState<string>("Training Session");
  const [showForm, setShowForm] = useState(true);
  const programId = useParams().id;

  useEffect(() => {
    const session = sessions.find(session => session.id === id);
    if (programId && session) {
      setTitle(session.name);
      setExercises(session.exerciseList);
    }
  }, []);

  const updateSession = ()=>{
    let newArray:Array<sessionType> = []
    for(let i = 0; i < sessions.length; i++){
      if(sessions[i].id == id){
        newArray.push({id: id, name:title, exerciseList: exercises})
      }
      else{
        newArray.push(sessions[i])
      }
    }
    console.log(newArray)
    setSessions(newArray)
  }
  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length, name: "", sets: 0, reps: 0, notes: "" }]);
  };

  const updateExercise = (index: number, field: keyof Exercise, value: string) => {
    const updated:any = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
    updateSession();
  };

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
    updateSession();
  };

  const moveExercise = (from: number, to: number) => {
    const updated = [...exercises];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setExercises(updated);
    updateSession();
  };

  if (!showForm) return null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full max-w-sm p-4 bg-gray-50 rounded-xl shadow space-y-2 relative transition-opacity duration-300 animate-fade-in text-gray-800">
        <div className="absolute top-2 right-2">
          <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FaTimes />
          </button>
        </div>
        <input
          className="text-xl font-semibold text-center border-none bg-transparent outline-none w-full "
          value={title}
          onChange={(e) => {setTitle(e.target.value); updateSession()}}
        />

        {exercises.map((exercise, index) => (
          <DraggableExercise
            key={index}
            exercise={exercise}
            index={index}
            updateExercise={updateExercise}
            removeExercise={removeExercise}
            moveExercise={moveExercise}
          />
        ))}

        <div className="flex justify-center">
          <button
            onClick={addExercise}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 flex items-center gap-2 transition-colors"
          >
            <FaPlus /> Add Exercise
          </button>
        </div>
      </div>
    </DndProvider>
  );
}