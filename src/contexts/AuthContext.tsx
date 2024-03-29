import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase"
import { User, onAuthStateChanged } from "firebase/auth"
const AuthContext = React.createContext<User | undefined>(undefined);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<User>(); //undefined so that we know if its loading

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user!)
        })
    });

    // const value = {
    //     currentUser,
    // };
    //
    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
}

