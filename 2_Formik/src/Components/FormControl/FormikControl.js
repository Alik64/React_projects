import React from 'react'
import Input from './Elements/Input'
import RadioButtons from './Elements/RadioButtons'
import Select from './Elements/Select'
import Textarea from './Elements/Textarea'
import CheckboxGroup from './Elements/CheckboxGroup'
import DatePicker from './Elements/DatePicker'

export default function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default: return null
    }
}
