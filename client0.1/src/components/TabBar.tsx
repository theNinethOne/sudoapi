import { useEffect, useState } from "react"
import Editor from '@monaco-editor/react';


export default function TabBar() {

    const [tabs, setTabs] = useState([
        { id: 1, name: "Tab 1", content: "" },
    ])


    const [currentContent, setCurrentContent] = useState("")

    const [activeTabId, setActiveTabId] = useState(1)

    const options = {
        readOnly: false,
        minimap: { enabled: false },
    };

    useEffect(() => {
        addTabViewHandler()
    }, [tabs])

    function addTabViewHandler() {
        const currentTab = tabs.find((t) => t.id === activeTabId)
        if (!currentTab) return console.log("no tab found");
        setCurrentContent(currentTab.content)
    }


    function tabClickHandler(tab: number) {
        const currentTab = tabs.find((t) => t.id === tab)
        if (!currentTab) return console.log("no tab found");
        setCurrentContent(currentTab.content)
        setActiveTabId(tab)
    }

    function tabCloseHandler(tab: number) {

        const newTabs = tabs.filter((t) => t.id !== tab)
        setTabs(newTabs)

    }

    function addTabHandler() {

        const newTabId = Date.now()

        setTabs(prev => [...prev, {
            id: newTabId,
            name: `Tab ${tabs.length + 1}`,
            content: `new tab ${newTabId}`,
        }])

        setActiveTabId(newTabId)

    }

    function handleEditorChange(value: any) {
        if (!activeTabId) return console.log("no active tab");
        console.log(activeTabId, currentContent)

        setTabs(prev => prev.map((t) => t.id === activeTabId ? { ...t, content: value } : t))
    }



    return <>
        <div className='bg-zinc-800 p-5 h-screen'>
            <div className=" h-[60px] w-[500px] overflow-x-auto flex justify-left">

                {tabs.map((tab) =>

                    tab.id === activeTabId ?

                    <div
                        key={tab.id}
                        className="bg-zinc-500 h-[50px] w-[150px] p-2 px-2 flex flex-shrink-0 items-center justify-between border-b-4 border-b-blue-700 text-white rounded-2xl cursor-pointer hover:bg-zinc-600 mx-1"
                        onClick={() => tabClickHandler(tab.id)}>
                        <div>{tab.name}</div>
                        <button onClick={() => tabCloseHandler(tab.id)}>X</button>
                    </div> 

                    :

                    <div
                        key={tab.id}
                        className="bg-zinc-700 h-[50px] w-[150px] p-2 px-2 flex flex-shrink-0 items-center justify-between  text-white rounded-2xl cursor-pointer hover:bg-zinc-500 mx-1"
                        onClick={() => tabClickHandler(tab.id)}>
                        <div>{tab.name}</div>
                        <button onClick={() => tabCloseHandler(tab.id)}>X</button>
                    </div> 
                )}
                <button className="w-[50px] h-[50px] bg-zinc-600 flex-shrink-0 rounded-2xl items-center justify-center text-white  hover:bg-zinc-500 mx-1" onClick={addTabHandler}>+</button>

            </div>

            <Editor height="60vh" width="60vh" theme='vs-dark' defaultLanguage="json" options={options} defaultValue=" "
                className="mt-2"
                value={currentContent}
                onChange={(value) => handleEditorChange(value)} />

            <button className="bg-blue-600 p-5 rounded-lg mt-5 text-white hover:bg-blue-500" >SUBMIT</button>


        </div>

    </>
}