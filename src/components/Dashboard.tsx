import { useEffect, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { updateDoc, doc, deleteDoc } from "firebase/firestore"
import TodoItem from "./TodoItem"
import { Todo } from "./TodoItem"
import NewTodo from "./NewTodo"

import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { LanternClient } from "../../proto/light.client" // all proto types
import { Filter } from "../../proto/light"

function Navbar() {
    const currentUser = useAuth();
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
    const currentUser = useAuth();
    const [todos, setTodos] = useState<Todo[]>([]);

    function sortDone(a: Todo, b: Todo) {
        if (a.is_done > b.is_done) {
            return 1;
        } else {
            return -1;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const transport = new GrpcWebFetchTransport({
                baseUrl: "http://localhost:8080",
            });
            const client = new LanternClient(transport);
            const filter: Filter = {
                read: "All",
                sortBy: "DueDate",
                sortOrder: "Ascending",
                source: "FF",
                status: "Todo"
            }

            const res = await client.getTasks(filter);
            const tasks: Todo[] = JSON.parse(res.response.body);
            setTodos(tasks);
        }

        fetchData().catch(e => console.log(e));
    }, [])

    async function toggleCompleted(todo: Todo) {
        todo.is_done = !todo.is_done
    }

    async function deleteTodo(id: string) {
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

