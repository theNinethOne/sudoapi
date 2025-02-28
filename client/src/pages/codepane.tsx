import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Codepane() {

    const [ prompt, setPrompt ] = useState("")
    const [ ans, setAns ] = useState()

    const navigate = useNavigate()

    function handleClick(){
        navigate("/home")
    }

    async function handleSubmit() {
        const res = await axios.post("http://localhost:3000/", { "input" : prompt })
        console.log( res )
        setAns( res.data )
        navigate("/dashboard")
    }

    return <>
    { ans }
        CODE HERE
        <div className="flex items-center justify-center">
            <textarea 
                name="promptInput" 
                id="" cols={50} rows={10} placeholder="prompt here"
                onChange={ (e) => setPrompt( e.target.value)}
                className="bg-cyan-800 p-5 m-2 rounded-4xl"></textarea>
        </div>
        <button onClick={ handleSubmit }>SUBMIT</button>
        <button onClick={ handleClick }>HOME</button>
    </>
}