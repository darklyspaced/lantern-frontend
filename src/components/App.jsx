import SignUpPage from "./SignUpPage";
import LogInPage from "./LoginPage"
import Dashboard from "./Dashboard"
import Landing from "./Landing"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoute"

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/login" element={<LogInPage />} />
                    <Route path="/landing" element={<Landing />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App
