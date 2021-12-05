import React from 'react'
import Input from './Elements/Input'
import Select from './Elements/Select'
import Textarea from './Elements/Textarea'

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
        case 'checkbox':
        case 'date':
        default: return null
    }
}
