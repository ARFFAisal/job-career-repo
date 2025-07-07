import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser]  = useState(null)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }

    const SignOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const signInwithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider )
    }

    useEffect(() =>{
        const Unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('User in the on Auth state change', currentUser);
        })
        return () =>{
            Unsubscribe();
        }
    },[])

    const authInfo= {
        loading,
        user,
            createUser,
            signInUser,
            SignOutUser,
            signInwithGoogle,
    }
    return (
        
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;