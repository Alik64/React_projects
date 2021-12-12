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
    const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd)
    const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd)



    const [currentUser, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser)
            setLoadingData(false)
        })
        return unsubscribe
    }, [])



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
        <UserContext.Provider value={{ modalState, toggleModals, signUp, signIn, currentUser }}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}