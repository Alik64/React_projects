import { createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase-config'



export const UserContext = createContext()

export function UserContextProvider(props) {

    // AUTH
    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)
    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)

    // MODAL
    const [modalState, setModalState] = useState({
        signInModal: false,
        signUpModal: false
    })

    const toggleModals = modal => {
        if (modal === "signIn") {
            setModalState({
                signInModal: true,
                signUpModal: false
            })
        }
        if (modal === "signUp") {
            setModalState({
                signInModal: false,
                signUpModal: true
            })
        }
        if (modal === "close") {
            setModalState({
                signInModal: false,
                signUpModal: false
            })
        }




    }

    return (
        <UserContext.Provider value={{ modalState, toggleModals }}>
            {props.children}
        </UserContext.Provider>
    )
}