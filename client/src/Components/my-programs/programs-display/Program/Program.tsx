import { Link } from "react-router-dom"
import image from "../../../../assets/default-backdrop.jpg"

export default function Program(props:{name: string, id: string, index: number}) {
  return (
    <Link className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300" to={`${props.id}`}>
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
  )
}
