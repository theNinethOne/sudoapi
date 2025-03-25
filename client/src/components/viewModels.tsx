import axios from "axios"
import { useEffect, useState } from "react"
import ModelsCard from "./modelsCard"

export default function ViewModels() {

    const [ modelId, setModelId ] = useState("")
    const [ data, setData ] = useState("")

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
    }, [] )
    


    return<>
    <div className="flex flex-col items-center  bg-slate-600 h-screen w-screen">

        <div>
            <ModelsCard modelId={modelId} />
        </div>
    </div>
    </>
}