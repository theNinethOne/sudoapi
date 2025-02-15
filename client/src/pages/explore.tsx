import { useNavigate } from "react-router-dom"

export default function Explore() {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/codepane")
    }
    return <>
        Explore Page
        <button onClick={ handleClick }>codepane</button>
    </>
}