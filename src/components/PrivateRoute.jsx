import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"


const PrivateRoutes = () => {
    const { currentUser } = useAuth();
    if (currentUser == undefined){
        return null
    }

    return (
        currentUser ? <Outlet/> : <Navigate to='/landing'/> //if there is a user, then navigate to child (<Outlet />)
    )
}

export default PrivateRoutes
