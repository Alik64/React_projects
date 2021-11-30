import React from 'react'
import styles from './Form.module.css'

import { useFormik } from 'formik'



export default function Form() {
    const formik = useFormik({
        initialValues: {
            chanel: "",
            name: "",
            email: "",
            password: ""
        }
    })
    return (
        <div className={styles.wrapper} >

            <form className={styles.form}>

                <label htmlFor="chanel">Chanel</label>
                <input type="text" id="chanel" name="chanel" />


                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />



                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />



                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />



                <button>Submit</button>
            </form>


        </div>
    )
}


