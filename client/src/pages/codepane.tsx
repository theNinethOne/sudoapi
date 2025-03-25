import { useState } from "react"
import AddCode from "../components/addCode"
import CPSidebarBig from "../components/cpSideBarBig"
import CPSidebarSmall from "../components/cpSideBarSmall"


export default function Codepane() {

    const [ sideBarOpen, setSideBarOpen] = useState(true)
    const [ addCode, setAddCode ] = useState(false)

    function toggleSideBar() {
        setSideBarOpen(!sideBarOpen)
    }

    function toggleAddCode() {
        setAddCode(!addCode)
    }
    

    return <>
    <div className="flex flex-row justify-between">
        { sideBarOpen ? <CPSidebarBig handleSidebar={toggleSideBar} handleView={toggleAddCode} /> : <CPSidebarSmall handleSidebar={ toggleSideBar}/> }

        <AddCode/>
    </div>
    

    </>
}