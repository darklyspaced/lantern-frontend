import { useAuth } from "../contexts/AuthContext"

function Dashboard() {
    const { currentUser } = useAuth();
    return (
        <h1>Dashboard: {JSON.stringify(currentUser)} </h1>

    )
}

export default Dashboard;
