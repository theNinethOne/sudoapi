import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AddCode() {

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
        localStorage.setItem( "modelId", res.data)
        navigate("/dashboard")
    }
    return<>
        <div className="flex flex-col items-center  bg-slate-600 h-screen w-screen">

<div>
    <input type="text" placeholder="Model Name" className=" bg-slate-800 p-4 m-4 w-[600px] mt-12 rounded-2xl text-white shadow-2xl"/>
</div>


<div className="flex items-center justify-center P-5 bg-slate-900 rounded-2xl shadow-2xl m-5 mt-2">
    <textarea 
        name="promptInput" 
        id="" cols={50} rows={10} placeholder="prompt here"
        onChange={ (e) => setPrompt( e.target.value)}
        className="bg-slate-700 p-5 m-5 rounded-4xl text-white"></textarea>
</div>
<button className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"  onClick={ handleSubmit }>SUBMIT</button>
<button className="bg-slate-800 m-1 p-4 px-8 rounded-2xl text-white text-center hover:bg-slate-900"  onClick={ handleClick }>HOME</button>
</div>
    </>
}