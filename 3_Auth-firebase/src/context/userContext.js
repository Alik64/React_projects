import { createContext, useState, useEffect } from "react";

export const UserContext = createContext()

export function UserContextProvider(props) {
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