import { useState } from "react"
import toast from "react-hot-toast"

export default function ModelsCard({
    modelId,
    viewButtonHandler
}: {
    modelId: string,
    viewButtonHandler: () => void
}) {

    const [copied, serCopied] = useState(false)

    function copy() {
        navigator.clipboard.writeText(`http://localhost:3000/routes?modelId=${modelId}`)
        serCopied(true)
        toast.success("Copied to clipboard")
        setTimeout(() => { serCopied(false) }, 4000)
    }


    return (<>
        <div className="flex flex-col justify-start bg-slate-700  w-[700px] p-2 m-4 rounded-2xl">

            <div className="flex flex-row items-center justify-center h-[60px] w-[650px] bg-slate-800 text-white p-2 m-1 rounded-2xl">
                <div className="text-3xl font-bold text-center h-[60px] bg-slate-800 text-white p-2 m-1">MODEL_NAME</div>
                <div className="bg-slate-700 p-2 m-1 text-center">STATUS</div>
                <button className="bg-slate-700 p-2 m-1 text-center">

                   DEL
                </button>
                <button 
                    className="bg-slate-700 p-2 m-1 text-center"
                    onClick={ viewButtonHandler }>
                    VIEW
                </button>
            </div>

            <div className="flex flex-row items-center justify-center h-[60px] w-[650px] bg-slate-800 text-white p-5 m-1 rounded-2xl">

                <div className="bg-slate-700 p-2 px-2 m-1 text-center border border-slate-500 rounded-l-3xl">GET</div>
                <div className="bg-slate-700 p-2 m-1 text-center border border-slate-500">
                    http://localhost:3000/routes?modelId={modelId}
                </div>
                <button
                    className="bg-slate-700 p-2 px-2 m-1 text-center border border-slate-500 rounded-r-3xl" onClick={copy}>
                    {copied ? "COPIED" : "COPY"}
                </button>
            </div>
        </div>
    </>
    )
}
