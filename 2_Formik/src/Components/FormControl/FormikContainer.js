import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

export default function FormikContainer() {

    const initialValues = {
        email: "",
        description: "",
        selectOption: "",
        radioOption: "",
        checkboxOption: [],
        birthDate: null,

    };
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' },
    ]
    const radioOptions = [
        { key: 'Option 1', value: 'roption1' },
        { key: 'Option 2', value: 'roption2' },
        { key: 'Option 3', value: 'roption3' },
    ]
    const checkboxOptions = [
        { key: 'Option 1', value: 'chbx - option1' },
        { key: 'Option 2', value: 'chbx - option2' },
        { key: 'Option 3', value: 'chbx - option3' },
    ]
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Invalid email format'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().min(1, 'Required'),
        birthDate: Yup.date().required('Required').nullable()
    })
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))

    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}

        >
            {formik => <Form>
                <FormikControl control='input' type='email' label='Email' name='email' />
                <FormikControl control='textarea' label='Description' name='description' />
                <FormikControl
                    control='select'
                    label='Select a topic'
                    name='selectOption'
                    options={dropdownOptions} />

                <FormikControl
                    control='radio'
                    label='Radio topic'
                    name='radioOption'
                    options={radioOptions}
                />
                <FormikControl
                    control='checkbox'
                    label='Checkbox topics'
                    name='checkboxOption'
                    options={checkboxOptions}
                />
                <FormikControl
                    control='date'
                    label='Pick a date'
                    name='birthDate'
                />
                <button type="submit">Submit</button>
            </Form>}
        </Formik>
    )
}
