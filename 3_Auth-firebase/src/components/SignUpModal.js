import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

export default function SignUpModal(props) {
    const { modalState, toggleModals } = useContext(UserContext)


    return (
        <> {modalState.signUpModal && <div className="position-fixed top-0 vw-100 vh-100">
            <div className="w-100 h-100 bg-dark bg-opacity-75">
                <div className="position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button className="btn-close"></button>
                            </div>

                            <div className="modal-body">

                                <form className="sign-up-form">
                                    <div className="mb-3">
                                        <label htmlFor="signUpEmail" className='form-label'>Email adress</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            id="signUpEmail"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="signUpPwd" className='form-label'>Password</label>
                                        <input
                                            required
                                            name="pwd"
                                            type="password"
                                            id="signUpPwd"
                                            className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="repeatPwd" className='form-label'>Repeat password</label>
                                        <input
                                            required
                                            name="pwd"
                                            type="password"
                                            id="repeatPwd"
                                            className="form-control" />
                                        <p className="text-danger mt-1">Validation</p>
                                    </div>
                                    <button className='btn btn-primary'>Submit</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>}

        </>
    )
}
