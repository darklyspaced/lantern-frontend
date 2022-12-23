import SignUpPage from "./SignUpPage";
import LogInPage from "./LoginPage"
import Dashboard from "./Dashboard"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/signup" element={<SignUpPage/>} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<LogInPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default App
