import { useNavigate } from "react-router-dom"

export default function Dashboard() {

    const navigate = useNavigate()
    function handleClick() {
        navigate("/home")
    }
    return<>
    
        DASHBOARD PAGE
        <div>
            <button onClick={ handleClick }>HOME</button>
        </div>
    </>
}