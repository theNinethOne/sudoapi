import { useNavigate } from "react-router-dom"
import NavBtn from "./sub/navbarButtons"

export default function Navbar() {

    const navigate = useNavigate()

    return <>
        <div className="bg-cyan-500 h-[80px] flex items-center justify-between p-5">
            <div>SUDOAPI</div>
            <div className="flex">
                <NavBtn prop="HOME" clickHandler={ () => navigate("/home") }/>
                <NavBtn prop="explore" clickHandler={ () => navigate("/explore") }/>
                <NavBtn prop="docs" clickHandler={ () => navigate("/docs") }/>
                <NavBtn prop="codepane" clickHandler={ () => navigate("/codepane") }/>
                <NavBtn prop="gui" clickHandler={ () => navigate("/gui") }/>
            </div>
            <div>USER</div>
        </div>
    </>
}