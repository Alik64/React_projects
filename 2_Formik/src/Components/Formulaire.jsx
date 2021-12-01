import React from 'react'
import styles from './Form.module.css'
import * as Yup from 'yup'

import { Formik, Form, Field, ErrorMessage } from 'formik'

const initialValues = {
    chanel: "",
    name: "",
    email: "",
    password: ""
}

const onSubmit = values => {
    console.log(values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')

})
export default function Formulaire() {


    return (
        <Formik className={styles.wrapper}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >


            <form
                onSubmit={formik.handleSubmit}
                className={styles.form}>


                <div className={styles.form_champ}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        {...formik.getFieldProps('name')} />

                    {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
                </div>

                <div className={styles.form_champ}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"
                        {...formik.getFieldProps('email')} />

                    {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> : null}
                </div>

                <div className={styles.form_champ}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"
                        {...formik.getFieldProps('password')} />

                    {formik.touched.password && formik.errors.password ? <div className={styles.error}>{formik.errors.password}</div> : null}
                </div>



                <pre>{JSON.stringify(formik.values)}</pre>
                <button type="submit">Submit</button>
            </form>


        </Formik>
    )
}


