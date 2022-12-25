import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export function Navbar() {
    return(
        <div className="h-[7%] max-h-[100px] w-full text-white bg-[#30363D]">
            <nav className="float-left w-full h-full flex flex-row items-center sticky top-[15px]">
                <Link to="/landing" className="font-semibold text-3xl ml-[2.5%] mr-[76%] relative ">Avagarde</Link> 
            </nav>
        </div>
    )
}

function Dashboard() {
    const { currentUser } = useAuth();
    return (
        <div className="w-full h-full bg-[#0D1117]">
            <Navbar />
        </div>
    )
}

export default Dashboard;
