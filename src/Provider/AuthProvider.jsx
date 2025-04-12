import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
     
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    };
    const updateUserProfile=(user)=>{
        return updateProfile(auth.currentUser,user);
    };
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    const authInfo={
        user,
        setUser,
        createUser,
        loginUser,
        updateUserProfile,
        resetPassword, 
    }
     

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return unsubscribe();
    })
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;