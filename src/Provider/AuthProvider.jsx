import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext=createContext();
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    const updateUserProfile=(user)=>{
        return updateProfile(auth.currentUser,user);
    };
    const resetPassword=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    const logOut=()=>{
        return signOut(auth);
    }
    const loginWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const authInfo={
        user,
        setUser,
        createUser,
        loginUser,
        updateUserProfile,
        resetPassword, 
        logOut,
        loginWithGoogle,
        loading,
    }
     

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;