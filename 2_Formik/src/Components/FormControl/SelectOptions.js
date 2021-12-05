import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function SelectOptions(props) {
    const { name, label, ...rest } = props
    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="select" id={name} name={name} />
        </div>
    )
}

export default SelectOptions
