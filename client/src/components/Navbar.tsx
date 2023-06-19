import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Navbar() {
    const currentUser = useAuth();
    return (
        <div className="h-[7%] max-h-[100px] w-full text-white">
            <nav className="float-left w-full h-full flex flex-row items-center sticky top-[15px]">
                <Link to={currentUser == undefined ? "/landing" : "/dashboard"} className="font-semibold text-3xl ml-[2.5%] mr-[76%] relative ">Avagarde</Link>
                <Link className="border border-[#8B949E] h-[2.7rem] w-[5.1rem] mr-8 hover:bg-[#161B22] flex items-center rounded-lg" to="/login"><p className="m-auto">Login</p></Link>
                <Link className="border border-[#8B949E] h-[2.7rem] w-[6.2rem] hover:bg-[#161B22] flex items-center rounded-lg" to="/signup"><p className="m-auto">Sign Up</p></Link>
            </nav>
        </div>
    )
}

