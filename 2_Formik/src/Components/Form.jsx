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


            <form
                onSubmit={formik.handleSubmit}
                className={styles.form}>

                <label htmlFor="chanel">Chanel</label>
                <input type="text" id="chanel" name="chanel" onChange={formik.handleChange} value={formik.values.chanel} />


                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />



                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />



                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />


                <pre>{JSON.stringify(formik.values)}</pre>
                <button>Submit</button>
            </form>


        </div>
    )
}


