import { useState } from "react"
import toast from "react-hot-toast"

export default function ModelsCard({
    modelId
}: {
    modelId: string
}) {

    const [copied, serCopied] = useState(false)

    function copy() {
        navigator.clipboard.writeText(`http://localhost:3000/routes?modelId=${modelId}`)
        serCopied(true)
        toast.success("Copied to clipboard")
        setTimeout(() => { serCopied(false) }, 4000)
    }


    return (<>
        <div className="flex flex-col items-center w-[700px] bg-slate-700 p-2 m-4 rounded-2xl">

            <div className="flex flex-row items-center justify-center h-[60px] w-[650px] bg-slate-800 text-white p-2 m-1 rounded-2xl">
                <div className="text-3xl font-bold text-center h-[60px] bg-slate-800 text-white p-2 m-1">MODEL_NAME</div>
                <div className="bg-slate-700 p-2 m-1 text-center">STATUS</div>
                <button className="bg-slate-700 p-2 m-1 text-center">

                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button className="bg-slate-700 p-2 m-1 text-center">
                <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50178 5.38707C8.80966 5.10997 8.83462 4.63576 8.55752 4.32787C8.28043 4.01999 7.80621 3.99503 7.49833 4.27213L5.76084 5.83587C5.0245 6.49853 4.41369 7.04822 3.99428 7.54679C3.55325 8.07104 3.23975 8.6343 3.23975 9.3296C3.23975 10.0249 3.55325 10.5882 3.99428 11.1124C4.41369 11.611 5.02449 12.1607 5.76083 12.8233L7.49833 14.3871C7.80621 14.6642 8.28043 14.6392 8.55752 14.3313C8.83462 14.0234 8.80966 13.5492 8.50178 13.2721L6.80531 11.7453C6.01743 11.0362 5.48623 10.5558 5.14213 10.1468C4.81188 9.7542 4.73975 9.52502 4.73975 9.3296C4.73975 9.13417 4.81188 8.90499 5.14213 8.51241C5.48623 8.10338 6.01743 7.62298 6.80531 6.91389L8.50178 5.38707Z" fill="#1C274C"/>
<path d="M14.1795 4.27517C14.5798 4.38157 14.818 4.79234 14.7117 5.19266L10.7248 20.1927C10.6184 20.593 10.2077 20.8312 9.80735 20.7248C9.40703 20.6184 9.16877 20.2077 9.27517 19.8074L13.262 4.80735C13.3684 4.40704 13.7792 4.16877 14.1795 4.27517Z" fill="#1C274C"/>
<path d="M15.4425 10.4983C15.7196 10.1904 16.1938 10.1654 16.5017 10.4425L18.2392 12.0063C18.9756 12.6689 19.5864 13.2186 20.0058 13.7172C20.4468 14.2415 20.7603 14.8047 20.7603 15.5C20.7603 16.1953 20.4468 16.7586 20.0058 17.2828C19.5864 17.7814 18.9756 18.3311 18.2392 18.9937L16.5017 20.5575C16.1938 20.8346 15.7196 20.8096 15.4425 20.5017C15.1654 20.1938 15.1904 19.7196 15.4983 19.4425L17.1947 17.9157C17.9826 17.2066 18.5138 16.7262 18.8579 16.3172C19.1882 15.9246 19.2603 15.6954 19.2603 15.5C19.2603 15.3046 19.1882 15.0754 18.8579 14.6828C18.5138 14.2738 17.9826 13.7934 17.1947 13.0843L15.4983 11.5575C15.1904 11.2804 15.1654 10.8062 15.4425 10.4983Z" fill="#1C274C"/>
</svg>
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
