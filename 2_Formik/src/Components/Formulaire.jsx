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
        <div className={styles.wrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >


                <Form className={styles.form}>

                    <div className={styles.form_champ}>
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name"
                        />
                        <ErrorMessage name="name" className={styles.error} />
                    </div>

                    <div className={styles.form_champ}>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email"
                        />
                        <ErrorMessage name="email" className={styles.error} />

                    </div>

                    <div className={styles.form_champ}>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password"
                        />
                        <ErrorMessage name="password" className={styles.error} />
                    </div>




                    <button type="submit">Submit</button>
                </Form>


            </Formik>
        </div>

    )
}


