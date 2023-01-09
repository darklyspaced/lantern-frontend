import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { query, collection, onSnapshot } from "firebase/firestore"

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
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let todosArray = []
            QuerySnapshot.forEach(doc => {
                if (doc.data().userID == currentUser.uid) {
                    todosArray.push(doc.data());
                }
            });
            setTodos(todosArray);
        });
        return () => unsubscribe
    }, [])

    return (
        <div className="w-full h-full bg-[#0D1117]">
            <Navbar />
            <div className="h-14 border mt-[20px] text-white border-gray-500 rounded-md w-[95%] m-auto">
                    <input className="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-300 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer relative left-5 top-[1.1rem]" type="checkbox" value="" />
                    <p className="relative float-left text-[1.1rem] left-10 top-[0.9rem]">Task</p>
            </div>

        </div>
    )
}

export default Dashboard;
