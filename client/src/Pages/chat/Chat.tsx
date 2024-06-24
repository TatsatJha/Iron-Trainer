export default function Chat() {
  return (
    <div className='h-screen w-screen'>
        <div className="mt-20 p-8 w-3/4 mx-auto shadow h-full">
            <div className="border-gray-100 shadow rounded-xl border-solid border-2 p-4 m-4 w-fit">
                <p>avatar image</p>
                <p>text from one person</p>
            </div>
            <div className="border-gray-100 shadow rounded-xl border-solid border-2 p-4 m-4 w-fit">
                <p>avatar image</p>
                <p>text from one person</p>
            </div>
        </div>
        <input className="fixed bottom-0 left-1/4 p-6 w-1/2 rounded-lg border-black border-solid border-2 mb-8" placeholder="Ask VAI" type="text">
        </input>
    </div>
  )
}
