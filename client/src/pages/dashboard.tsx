import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    const [ modelId, setModelId ] = useState("")
    const [ data, setData ] = useState("")

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

    useEffect( () => {
        getData()
    }, [])


    return<>
    
        DASHBOARD PAGE
        <div>
            http://localhost:3000/routes?modelId={modelId}
        </div>
        <div>
            { data }
        </div>
        <div>
            <button onClick={ handleClick }>HOME</button>
        </div>
    </>
}