import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    const [authCheckComplete, setAuthCheckComplete] = useState(false);

    useEffect(() => {
        if (currentUser !== undefined) {
            setAuthCheckComplete(true);
        }
    }, [currentUser]);

    if (!authCheckComplete) {
        return <LoadingPage />;
    }

    return currentUser ? children : <Navigate to="/login" replace />;
}

function LoadingPage() {
    return (
        <div className="w-[100%] h-[100%] bg-black" />
    );
}

export default PrivateRoute;
