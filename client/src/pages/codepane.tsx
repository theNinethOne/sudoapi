import { useState } from "react"
import AddCode from "../components/addCode"
import CPSidebarBig from "../components/cpSideBarBig"
import CPSidebarSmall from "../components/cpSideBarSmall"
import ViewModels from "../components/viewModels"


export default function Codepane() {

    const [sideBarOpen, setSideBarOpen] = useState(true)
    const [addCode, setAddCode] = useState(false)

    function toggleSideBar() {
        setSideBarOpen(!sideBarOpen)
    }

    function toggleAddCode() {
        setAddCode(!addCode)
    }


    return <>
        <div className="flex flex-row justify-between">
            {sideBarOpen ? <CPSidebarBig handleSidebar={toggleSideBar} handleView={toggleAddCode} viewFlag={addCode} />
                : <CPSidebarSmall handleSidebar={toggleSideBar} handleView={toggleAddCode} viewFlag={addCode} />}
            {addCode ? <AddCode /> : <ViewModels />}
        </div>
    </>
}