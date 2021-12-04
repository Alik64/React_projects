import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

export default function FormikContainer() {
    const initialValues = {
        email: ""
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email format')
    })
    const onSubmit = values => console.log('Form data', values)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}

        >
            {formik => <Form>
                <FormikControl control='input' type='email' label='Email' name='email' />
                <button type="submit">Submit</button>
            </Form>}
        </Formik>
    )
}
