import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

export default function FormikContainer() {
    const initialValues = {};
    const validationSchema = Yup.object({})
    onSubmit = values => console.log('Form data', values)

    return (
        <Formik>
            {formik => <Form>
                <button type="submit">Submit</button>
            </Form>}
        </Formik>
    )
}
