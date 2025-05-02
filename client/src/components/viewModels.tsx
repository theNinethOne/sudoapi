import axios from "axios"
import { useEffect, useState } from "react"
import ModelsCard from "./modelsCard"
import ViewCode from "./viewCode"

export default function ViewModels() {

    const [ modelId, setModelId ] = useState("")
    const [ data, setData ] = useState("")
    const [ codeViewToggle, setCodeViewToggle ] = useState( false )

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

    function toggleCodeView () {
        setCodeViewToggle( !codeViewToggle )
    }

    useEffect( () => {
        getData()
    }, [] )
    


    return<>
    <div className={` ${ codeViewToggle ? 
                            "flex flex-col justify-between bg-slate-600 h-screen w-screen"
                            :"flex flex-col items-center bg-slate-600 h-screen w-screen"}`}>

        <div className="flex flex-row">
            <ModelsCard modelId={modelId} viewButtonHandler={ toggleCodeView }/>
            { codeViewToggle && <ViewCode/>}
        </div>
    </div>
    </>
}