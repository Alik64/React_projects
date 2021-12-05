import React, { Fragment } from 'react'

import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'


function RadioButtons() {
    const { label, name, options, ...rest } = props
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            <Fragment key={option.key}>
                                <input type="radio" id={option.value} {...field} value={option.value} />
                            </Fragment>
                        })
                    }
                }

            </Field>
        </div>
    )
}

export default RadioButtons
