import { useState } from "react"
import AddCode from "../components/addCode"


export default function Codepane() {

    const [ sideBarOpen, setSideBarOpen] = useState(true)
    const [ addCode, setAddCode ] = useState(false)
    

    return <>
    <AddCode/>
    

    </>
}