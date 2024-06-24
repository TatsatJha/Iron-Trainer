import { useCallback, useState } from "react"
import Message from "../../components/chat/Message.tsx"
import { Send } from "@mui/icons-material"

export default function Chat() {
    const [chatHistory, setChatHistory] = useState<Array<string>>([])
    const [prompt, setPrompt] = useState("")

    const sendPrompt = async ()=>{
        // check if the message is empty
        if(prompt.replace(/\s/g,'') == ""){return}
        setChatHistory([...chatHistory, prompt])
        // setprompt to empty string
        setPrompt("")
            
        // send api request
        const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text")
        const text = await res.text()
        // update chat history with api response
        setChatHistory([...chatHistory, prompt, text])
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
        <div className=" top-20 rounded-lg p-8 flex-col relative overflow-auto w-full px-96 pb-40">
        {
            chatHistory.map((message) => renderMessage(message))
        }
        </div>
        <div className="fixed bottom-0 w-full left-1/4 bg-white">
            <input className="p-6 w-1/2 rounded-lg text-gray-500 shadow border-solid border-2 mb-8 mr-4" placeholder="Ask VAI" type="text" value={prompt} onChange={updatePrompt}>
            </input>
            <span className="bg-blue-300 p-4 rounded border-blue-500 border-solid border-2">
            <Send onClick={sendPrompt}></Send>
            </span>
        </div>
    </div>
  )
}
