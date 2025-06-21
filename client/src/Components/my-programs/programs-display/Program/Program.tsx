import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../../../firebase";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

export default function Program(props: {discover:boolean, name: string; id: string; index: number}) {

  const [deleted, setDeleted] = useState(false);

  const  handleDelete = async () => {

    console.log(`Delete program with id: ${props.id}`);
    setDeleted(true);

    await deleteDoc(doc(firestore, "Programs", props.id));
  };

  return (
    <div hidden={deleted} className="bg-white p-4 rounded-xl relative shadow-md hover:shadow-xl transition-shadow duration-300 flex justify-between items-start">
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
      { props.discover ? <></>:
      <div className="pl-4">
        <button
        className="text-gray-500 hover:text-gray-800 transition-colors duration-300 px-2"
        onClick={handleDelete}
        >
          <FaTrashAlt />
        </button>
      </div>
      }
      <Link className="absolute bottom-2 right-2" to={`edit/${props.id}`}>
        <button className="text-gray-500 hover:text-gray-800 transition-colors duration-300 px-2">
          <FaEdit  />
        </button>
      </Link>
    </div>
  );
}
