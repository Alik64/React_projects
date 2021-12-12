import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

export default function SignUpModal(props) {
    const { modalState, toggleModals, signUp } = useContext(UserContext)
    const navigate = useNavigate()

    const [validation, setValidation] = useState("")

    const inputs = useRef([])
    const addInputs = el => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el)
        }
    }
    const formRef = useRef()

    // Validation FRONT
    const handleForm = async (e) => {
        e.preventDefault()
        // si Password moins 6 charactères

        if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
            setValidation("6 characters min")
            return
        }
        if (inputs.current[1].value !== inputs.current[2].value) {
            setValidation("passwords don't match")
            return
        }

        //Validaiton coté FireBase

        try {
            const cred = await signUp( // nous retourne un objet d'utilisateur qu'on a crée
                inputs.current[0].value,
                inputs.current[1].value,
            )
            formRef.current.reset()
            setValidation("")
            navigate('/private/private-home')
            // une fois connecté 


        } catch (err) {

            if (err.code === "auth/email-already-in-use") {
                setValidation("User already exist")
            }
            if (err.code === "auth/invalid-email") {
                setValidation("Invalid E-mail")
            }
        }
    }
    // supprimer le message d'erreur + la fermeture de modal
    const closeModal = () => {
        setValidation("")
        toggleModals("close")
    }
    return (
        <> {modalState.signUpModal && <div className="position-fixed top-0 vw-100 vh-100">
            <div // Overlay
                onClick={closeModal}
                className="w-100 h-100 bg-dark bg-opacity-75">
            </div>
            <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sign Up</h5>
                            <button onClick={closeModal} className="btn-close"></button>
                        </div>

                        <div className="modal-body">

                            <form
                                ref={formRef}
                                onSubmit={handleForm}
                                className="sign-up-form">
                                <div className="mb-3">
                                    <label htmlFor="signUpEmail" className='form-label'>Email adress</label>
                                    <input
                                        ref={addInputs}
                                        required
                                        name="email"
                                        type="email"
                                        id="signUpEmail"
                                        className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="signUpPwd" className='form-label'>Password</label>
                                    <input
                                        ref={addInputs}
                                        required
                                        name="pwd"
                                        type="password"
                                        id="signUpPwd"
                                        className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="repeatPwd" className='form-label'>Repeat password</label>
                                    <input
                                        ref={addInputs}
                                        required
                                        name="pwd"
                                        type="password"
                                        id="repeatPwd"
                                        className="form-control" />
                                    <p className="text-danger mt-1">{validation}</p>
                                </div>
                                <button className='btn btn-primary'>Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>

        </div>}

        </>
    )
}
