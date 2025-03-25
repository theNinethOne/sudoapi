import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    const [ modelId, setModelId ] = useState("")
    const [ data, setData ] = useState("")
    const [ copied, setCopied ] = useState(false)

    const navigate = useNavigate()
    function handleClick() {
        navigate("/home")
    }

    async function getData(  ) {

        const modelId = localStorage.getItem("modelId") || ""
        console.log( modelId )
        const res  = await axios.get(`http://localhost:3000/routes?modelId=${modelId}`)
        setModelId( modelId)
        const renderData = JSON.stringify(res.data)
        setData( renderData )
        console.log(  renderData )
        return res
    }

    function copyRoute() {
        const copyUrl = `http://localhost:3000/routes?modelId=${modelId}`
        navigator.clipboard.writeText(copyUrl)
            .then( () => { toast.success("Copied", 
                {
                    style: {
                      border: '10px solid #713200',
                      background: '#333',
                      padding: '16px',
                      color: '#fff',
                    },
                    iconTheme: {
                      primary: '#39e75f',
                      secondary: '#FFFAEE',
                    },
                  }
            ) } )
            .catch( (err) => 
                {toast.error("Copy Failed")
                toast.error(err)} )
        setCopied(true)
        setTimeout( () => {
            setCopied(false)
        }, 4000)
    }

    useEffect( () => {
        getData()
    }, [])


    return<>
    <div className="bg-slate-600 h-screen flex flex-col  items-center">    
        DASHBOARD PAGE

        <div className="bg-slate-800 flex justify-center items-center p-2 rounded-2xl m-2 w-[810px] mt-28">
            <div className="m-4 p-2 bg-slate-600 text-white text-center flex justify-center items-center rounded-2xl w-[800px]">
                http://localhost:3000/routes?modelId={modelId}
            </div>
            <button className="bg-slate-700 m-1 p-2 rounded-2xl text-white text-center hover:bg-slate-900" 
                onClick={ copyRoute }>
                    { copied ? "Copied" : "Copy"}</button>
        </div>
        
        <div className="m-4 p-2 bg-slate-800 text-white text-center flex justify-center items-center rounded-2xl w-[810px]">
            { data }
        </div>
        <div className="m-4 p-2 bg-cyan-600 text-white text-center flex justify-center items-center rounded-2xl w-[80px]">
            <button onClick={ handleClick }>HOME</button>
        </div>
    </div>

    </>
}