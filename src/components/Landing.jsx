import Navbar from "./Navbar"
import auth from "../firebase"
import { useAuth } from "../contexts/AuthContext"

function Landing(){
    const { currentUser } = useAuth();
    console.log(JSON.stringify(currentUser));
    return (
        <div className="h-full w-full bg-[#0D1117]">
            <Navbar />
        </div>
    )
}

export default Landing
