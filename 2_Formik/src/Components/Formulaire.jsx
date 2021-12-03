import React from 'react'
import styles from './Form.module.css'
import * as Yup from 'yup'

import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import TextError from './TextError.jsx'

const initialValues = {

    name: "",
    email: "",
    password: "",
    comments: "",
    adress: "",
    social: {
        facebook: "",
        twitter: ""
    },
    phoneNumbers: ["", ""],
    phNumber: [""]
}

const onSubmit = values => {
    console.log(values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required!'),
    password: Yup.string().required('Required!'),

    social: Yup.object({
        facebook: Yup.string().required('Required!'),
        twitter: Yup.string().required('Required twitter'),
    }),
})

const validateComments = value => {
    let error
    if (!value) {
        error = "Required field"
    }
    return error
}
export default function Formulaire() {


    return (
        <div className={styles.wrapper}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnChange={false}
                validateOnBlur={true}
            >
                {formik => {
                    console.log("formik props", formik)
                    return (
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
                                <ErrorMessage name="password" component='div' className="error" />
                            </div>

                            <div className={styles.form_champ}>
                                <Field id="comments" name="comments" as="textarea" placeholder="Enter your comment" validate={validateComments} />
                                <ErrorMessage name="comments" component='div' className="error" />

                            </div>
                            <div className={styles.form_champ}>
                                <label htmlFor="adress">Adress</label>

                                <FastField name="adress">
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
                                </FastField>
                            </div>
                            <div className={styles.form_champ}>
                                <label htmlFor="facebook">Facebook profile</label>
                                <Field id="facebook" name="social.facebook" type="text" />
                                <ErrorMessage name="social.facebook" component='div' className="error" />
                            </div>
                            <div className={styles.form_champ}>
                                <label htmlFor="twitter">Twitter profile</label>
                                <Field id="twitter" name="social.twitter" type="text" />

                            </div>
                            <div className={styles.form_champ}>
                                <label htmlFor="telFix">Fix Tel Number</label>
                                <Field id="telFix" name="phoneNumbers[0]" type="text" />
                            </div>
                            <div className={styles.form_champ}>
                                <label htmlFor="telMobile">Mobile Number</label>
                                <Field id="telMobile" name="phoneNumbers[1]" type="text" />
                            </div>
                            <div className={styles.form_champ}>
                                <label htmlFor="">List of phone numbers</label>
                                <FieldArray name='phNumber'>
                                    {
                                        (fieldArrayProps) => {
                                            const { push, remove, form } = fieldArrayProps
                                            const { values } = form
                                            const { phNumber } = values
                                            console.log('Form errors', form.errors)
                                            return (
                                                <div>
                                                    {phNumber.map((phNumber, index) => (
                                                        <div key={index}>
                                                            <Field name={`phNumber[${index}]`}></Field>
                                                            {index > 0 && <button type="button" onClick={() => remove(index)} >-</button>}

                                                            <button type="button" onClick={() => push('')} >+</button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>
                            <div>

                                <button type="button" onClick={() => formik.validateField('comments')}>Validate comments</button>
                                <button type="button" onClick={() => formik.validateForm('Form')}>Validate all</button>
                                <button type="button" onClick={() => formik.setFieldTouched('comments')}>Visit comments</button>
                                <button type="button" onClick={() => formik.setTouched({
                                    name: true,
                                    comments: true,
                                    password: true
                                })}>Visit fields</button>
                                <button type="submit" disabled={!formik.isValid}>Submit</button>
                            </div>
                        </Form>
                    )
                }}



            </Formik>
        </div>

    )
}