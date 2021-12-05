import React from 'react'

import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'

function RadioButtons() {
    const { label, name, options, ...rest } = props
    return (
        <div className="form-control">
            <label htmlFor="">{label}</label>
        </div>
    )
}

export default RadioButtons
