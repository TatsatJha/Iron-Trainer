import Message from "../../components/chat/Message.tsx"

export default function Chat() {
  return (
    <div className='h-screen w-screen'>
        <div className="mt-20 p-8 w-3/4 mx-auto shadow h-full flex-col relative">
            <Message text="A bunch of really long text to be honest with you we can just test this as a thing for practicing how fast we can talk cause we can still get better at that  to be honest with you"></Message>
            <Message text="A bunch of really long text to be honest with you we can just test this as a thing for practicing how fast we can talk cause we can still get better at that  to be honest with you"></Message>
            <Message text="A bunch of really long text to be honest with you we can just test this as a thing for practicing how fast we can talk cause we can still get better at that  to be honest with you"></Message>
            <Message text="A bunch of really long text to be honest with you we can just test this as a thing for practicing how fast we can talk cause we can still get better at that  to be honest with you"></Message>

        </div>
        <input className="fixed bottom-0 left-1/4 p-6 w-1/2 rounded-lg border-black border-solid border-2 mb-8" placeholder="Ask VAI" type="text">
        </input>
    </div>
  )
}
