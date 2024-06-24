export default function Message(props:{text: string}) {
  return (
    <div className="border-gray-100 shadow rounded-xl border-solid border-2 p-4 w-fit">
        <p>avatar image</p>
        <p>{props.text}</p>
    </div>
  )
}
