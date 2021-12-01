import React from 'react'
import styles from './Form.module.css'

import { useFormik } from 'formik'

const initialValues = {
    chanel: "",
    name: "",
    email: "",
    password: ""
}

const onSubmit = values => {
    console.log(values)
}

const validate = values => {
    // values.name values.email ... etc
    // errors.name errors.email ... etc
    // errors.name = 'This field is requered'
    let errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'

    }

    if (!values.password) {
        errors.password = 'Required'
    }

    return errors
}

export default function Form() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    })
    console.log(formik.errors)
    return (
        <div className={styles.wrapper} >


            <form
                onSubmit={formik.handleSubmit}
                className={styles.form}>


                <div className={styles.form_champ}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name && <div className={styles.error}>{formik.errors.name}</div>}
                </div>

                <div className={styles.form_champ}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email && <div className={styles.error}>{formik.errors.email}</div>}
                </div>

                <div className={styles.form_champ}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password && <div className={styles.error}>{formik.errors.password}</div>}
                </div>



                <pre>{JSON.stringify(formik.values)}</pre>
                <button type="submit">Submit</button>
            </form>


        </div>
    )
}


