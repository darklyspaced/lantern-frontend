import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState(); //undefined so that we know if its loading

    function updateAuthStatus() {
        ;
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    })

    const value = {
        currentUser,
        updateAuthStatus
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

