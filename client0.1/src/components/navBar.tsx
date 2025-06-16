import { useState } from "react"

export default function NavBar() {
    const [ isClicked , setIsClicked ] = useState(false)

    return<>
    <div onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? <BigBar/> : <SmallBar/>}
    </div>
    </>
}

function SmallBar(){
    return <>
    <div className="flex flex-col h-screen w-[60px] bg-amber-500">
        <div className="h-[50px] w-[50px] m-1 p-1 bg-amber-500">H</div>
        <div className="h-[50px] w-[50px] m-1 p-1 bg-amber-500">C</div>
        <div className="h-[50px] w-[50px] m-1 p-1 bg-amber-500">P</div>
    </div>
    </>
}

function BigBar(){
    return <>
    <div className="flex flex-col h-screen w-[150px] bg-amber-500 ">
        <div className="h-[50px] w-[50px] m-1 p-1 bg-amber-500">H</div>
        <div className="h-[50px] w-[50px] m-1 p-1 bg-amber-500">C</div>
        <div className="h-[50px] w-[50px] m-1 p-1 bg-amber-500">P</div>
    </div>
    </>
}