import { useCallback, useState } from "react"
import Message from "../../components/chat/Message.tsx"
import { Send } from "@mui/icons-material"

export default function Chat() {
    const [chatHistory, setChatHistory] = useState<Array<string>>([])
    const [prompt, setPrompt] = useState("")

    const sendPrompt = ()=>{
        // update chat history
            // check if the message is empty
            if(prompt.replace(/\s/g,'') == ""){return}
            // append prompt
            setChatHistory([...chatHistory, prompt])
            // setprompt to empty string
            setPrompt("")
            

        // send api request
    }
    const updatePrompt = (e: any)=>{
        setPrompt(e.target.value)
    }
    const renderMessage = useCallback(
        (message: string)=>{
        return(
            <Message text={message}></Message>
        )
        },[]
    )
  return (
    <div className='h-screen w-screen'>
        <div className="mt-20 p-8 w-3/4 mx-auto shadow h-full flex-col relative">
        {
            chatHistory.map((message) => renderMessage(message))
        }
        </div>
        <div className="fixed bottom-0 left-1/4 w-full">
            <input className="p-6 w-1/2 rounded-lg border-black border-solid border-2 mb-8 mr-4" placeholder="Ask VAI" type="text" value={prompt} onChange={updatePrompt}>
            </input>
            <span className="bg-blue-300 p-4 rounded border-blue-500 border-solid border-2">
            <Send onClick={sendPrompt}></Send>
            </span>
        </div>
    </div>
  )
}
