import React from "react";
import { FaDumbbell } from "react-icons/fa";

export default function ProgramWidget() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>

      <section>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Muscle Groups Trained (Past 7 Days)</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {["Push", "Pull", "Legs", "Rest", "Arms", "Legs", "Upper"].map((muscle) => (
            <div
              key={muscle}
              className="flex flex-col items-center justify-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer"
            >
              <FaDumbbell className="text-blue-500 w-6 h-6 mb-1" />
              <span className="text-sm text-gray-700 font-medium">{muscle}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Last Training Session</h3>
        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Program Name Placeholder</h4>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <li key={i} className="py-2 flex justify-between items-center">
                <span className="text-gray-700">Exercise Name {i}</span>
                <span className="text-sm text-gray-600">3 sets × 12 reps</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}