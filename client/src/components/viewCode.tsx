import axios from "axios"
import { useEffect, useState } from "react"

export default function ViewCode(){

    //const [ modelId, setModelId ] = useState("")
    const [ data, setData ] = useState("")

    async function getData(  ) {

        const modelId = localStorage.getItem("modelId") || ""
        console.log( modelId )
        const res  = await axios.get(`http://localhost:3000/routes?modelId=${modelId}`)
        //setModelId( modelId)
        const renderData = JSON.stringify(res.data)
        setData( renderData )
        console.log(  renderData )
        return res
    }

    useEffect(() => {
        getData()
    }, [])

    return<>
        <div className=" border-l m-4 p-2 bg-slate-800 text-white text-center flex justify-center items-center rounded-2xl">
            {data}
        </div>
    </>
}