import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import image from "../../../../assets/default-backdrop.jpg";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../../../firebase";
import { useState } from "react";

export default function Program(props: {discover:boolean, name: string; id: string; index: number }) {

  const [deleted, setDeleted] = useState(false);

  const  handleDelete = async () => {

    console.log(`Delete program with id: ${props.id}`);
    await deleteDoc(doc(firestore, "Programs", props.id));
    setDeleted(true);
  };

  return (
    <div hidden={deleted} className="bg-white p-4 rounded-xl relative shadow-md hover:shadow-xl transition-shadow duration-300">
      { props.discover ? <></>:
      <button
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-300"
      onClick={handleDelete}
      >
        <FaTrash />
      </button>
      }

      <Link
        to={`${props.id}`}
      >
        <h1 className="text-left text-2xl font-semibold mb-2">{props.name}</h1>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-gray-700 font-medium text-sm">Written by:</h2>
        </div>
        <div className="flex justify-center space-x-2 mb-2">
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">tag1</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">tag2</span>
          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">tag3</span>
        </div>
        <h4 className="text-sm text-gray-500 text-center">
          some number of people using the program
        </h4>
      </Link>
    </div>
  );
}
