import React from 'react'
import styles from './Form.module.css'
import * as Yup from 'yup'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextError from './TextError.jsx'

const initialValues = {
    chanel: "",
    name: "",
    email: "",
    password: "",
    comments: "",
    adress: ""
}

const onSubmit = values => {
    console.log(values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().required('Required!')

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
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component={TextError} />
                    </div>

                    <div className={styles.form_champ}>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email"
                        />
                        <ErrorMessage name="email" >
                            {errMsg => <div className="error">{errMsg}</div>}
                        </ErrorMessage>

                    </div>

                    <div className={styles.form_champ}>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password"
                        />
                        <ErrorMessage name="password" component={TextError} />
                    </div>

                    <div className={styles.form_champ}>
                        <Field id="comments" name="comments" as="textarea" placeholder="Enter your comment" />
                    </div>
                    <div className={styles.form_champ}>
                        <label htmlFor="adress">Adress</label>

                        <Field name="adress">
                            {
                                (props) => {
                                    const { field, form, meta } = props

                                    return (
                                        <div>
                                            <input type="text" id="adress"  {...field} />
                                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>
                                    )
                                }
                            }
                        </Field>
                    </div>


                    <button type="submit">Submit</button>
                </Form>


            </Formik>
        </div>

    )
}