import React from 'react'
import styles from './Form.module.css'
import * as Yup from 'yup'

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

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')

})
export default function OldForm() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate,
    })
    console.log(formik.touched)
    return (
        <div className={styles.wrapper} >


            <form
                onSubmit={formik.handleSubmit}
                className={styles.form}>


                <div className={styles.form_champ}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} value={formik.values.name} />

                    {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
                </div>

                <div className={styles.form_champ}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> : null}
                </div>

                <div className={styles.form_champ}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} value={formik.values.password} />
                    {formik.touched.password && formik.errors.password ? <div className={styles.error}>{formik.errors.password}</div> : null}
                </div>



                <pre>{JSON.stringify(formik.values)}</pre>
                <button type="submit">Submit</button>
            </form>


        </div>
    )
}


