import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormControl/FormikControl'




function LoginForm() {
    const initialValues = {
        email: '',
        password: '',
        checkboxOption: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Invalid email format'),
        password: Yup.string().required('Required'),


    });
    const onSubmit = values => {
        console.log('Form data', values)
    }
    const checkboxOptions = [
        { key: 'Remember me', value: 'Remembered' },
    ]
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
        >
            {formik => {
                return <Form>
                    <FormikControl
                        control='input'
                        type='email'
                        name='email'
                        label='Email' />
                    <FormikControl
                        control='input'
                        type='password'
                        name='password'
                        label='Password' />
                    <FormikControl
                        control='checkbox'
                        name='checkboxOption'
                        options={checkboxOptions}
                    />
                    <button type="submit" disabled={!formik.isValid} >Submit</button>
                </Form>
            }}
        </Formik>

    )
}

export default LoginForm
