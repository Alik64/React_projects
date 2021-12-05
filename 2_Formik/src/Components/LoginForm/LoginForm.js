import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';


function LoginForm() {
    const initialValues = {
        email: "",
        password: '',
    }
    const validationSchema = {
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    }
    const onSubmit = values => {
        console.log('Form data', values)
    }
    return (
        <div>

        </div>
    )
}

export default LoginForm
