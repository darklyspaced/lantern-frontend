import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { query, collection, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore"
import TodoItem from "./TodoItem"
import NewTodo from "./NewTodo"

function Navbar() {
    const { currentUser } = useAuth();
    console.log(currentUser);
    return (
        <div className="h-[7%] max-h-[100px] w-full text-white bg-[#30363D]">
            <nav className="float-left w-full h-full flex flex-row items-center sticky top-[15px]">
                <Link to={currentUser == null ? "/landing" : "/dashboard"} className="font-semibold text-3xl ml-[2.5%] mr-[76%] relative ">Avagarde</Link>
            </nav>
        </div>
    )
}

// One adaptable item in the todo list

function Dashboard() {
    const { currentUser } = useAuth();
    const [todos, setTodos] = useState([]);

    // Queries to database and filters to return only tasks that belong to user
    useEffect(() => {
        const q = query(collection(db, 'todos'))
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let todosArray = []
            QuerySnapshot.forEach(doc => { // HACK: security risk; filtering should ideally happen server side
                if (doc.data().userID == currentUser.uid) {
                    todosArray.push({ ...doc.data(), id: doc.id });
                }
            });
            setTodos(todosArray);
        });
        return () => unsubscribe();
    }, [])

    async function toggleCompleted(todo) {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed
        })
    }

    async function deleteTodo(id) {
        await deleteDoc(doc(db, 'todos', id));
    }


    return (
        <div className="w-full h-full bg-[#0D1117]">
            <Navbar />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        toggleCompleted={toggleCompleted}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
            <NewTodo />
        </div >
    )
}

export default Dashboard;
