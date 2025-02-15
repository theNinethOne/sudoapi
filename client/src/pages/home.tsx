import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    function handleCLick() {
        navigate("/explore")
    }
    return <>
        <div>
            HOMEPAGE
            <button
                onClick={ handleCLick }
                >EXPLORE</button>
        </div>
    </>
}