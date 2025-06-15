import React, { useState, useRef, Fragment } from "react";
import { FaPlus, FaTrashAlt, FaGripLines, FaTimes, FaStickyNote } from "react-icons/fa";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Popover, Transition } from "@headlessui/react";

const ItemType = "EXERCISE";

interface Exercise {
  name: string;
  sets: string;
  reps: string;
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
      className="bg-white rounded-lg shadow p-4 space-y-2 w-full transition-transform duration-200 hover:scale-[1.01] hover:shadow-lg"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Exercise name"
            className="border border-gray-300 rounded px-2 py-1"
            value={exercise.name}
            onChange={(e) => updateExercise(index, "name", e.target.value)}
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Sets"
              className="border border-gray-300 rounded px-2 py-1 w-1/2"
              value={exercise.sets}
              onChange={(e) => updateExercise(index, "sets", e.target.value)}
            />
            <input
              type="number"
              placeholder="Reps"
              className="border border-gray-300 rounded px-2 py-1 w-1/2"
              value={exercise.reps}
              onChange={(e) => updateExercise(index, "reps", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 pl-2">
          <button
            onClick={() => removeExercise(index)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Remove exercise"
          >
            <FaTrashAlt />
          </button>
          <div className="cursor-grab text-gray-400 hover:text-gray-600 flex justify-center">
            <FaGripLines className="w-5 h-5" />
          </div>
        </div>
      </div>

      <Popover className="relative">
        <Popover.Button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
          <FaStickyNote /> Notes
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-lg p-2">
            <textarea
              placeholder="Write your notes here..."
              className="w-full h-24 border border-gray-300 rounded p-2"
              value={exercise.notes}
              onChange={(e) => updateExercise(index, "notes", e.target.value)}
            />
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default function SessionForm() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: "", sets: "", reps: "", notes: "" },
  ]);
  const [title, setTitle] = useState<string>("Training Session");
  const [showForm, setShowForm] = useState(true);

  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", notes: "" }]);
  };

  const updateExercise = (index: number, field: keyof Exercise, value: string) => {
    const updated = [...exercises];
    updated[index][field] = value;
    setExercises(updated);
  };

  const removeExercise = (index: number) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  const moveExercise = (from: number, to: number) => {
    const updated = [...exercises];
    const [moved] = updated.splice(from, 1);
    updated.splice(to, 0, moved);
    setExercises(updated);
  };

  if (!showForm) return null;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full max-w-sm p-4 bg-gray-50 rounded-xl shadow space-y-4 relative transition-opacity duration-300 animate-fade-in">
        <div className="absolute top-2 right-2">
          <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FaTimes />
          </button>
        </div>
        <input
          className="text-xl font-semibold text-center border-none bg-transparent outline-none w-full text-gray-800"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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