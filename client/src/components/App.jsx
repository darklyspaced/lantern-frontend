import SignUpPage from "./SignUpPage";
import LogInPage from "./LoginPage"
import Dashboard from "./Dashboard"
import Landing from "./Landing"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute"

function App() {
    const { currentUser } = useAuth();
    return (
        <Router>
            <Routes>
                <Route path="/" element={currentUser == undefined ? <Navigate to="/dashboard" replace={true} /> : <Navigate to="/landing" replace={true} />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LogInPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />     <Route path="/landing" element={<Landing />} />
            </Routes>
        </Router>
    )
}

export default App
