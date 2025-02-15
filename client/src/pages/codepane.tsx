import { useNavigate } from "react-router-dom"

export default function Codepane() {

    const navigate = useNavigate()

    function handleClick(){
        navigate("/home")
    }
    return <>
        CODE HERE
        <button>SUBMIT</button>
        <button onClick={ handleClick }>HOME</button>
    </>
}