import React, { TextareaHTMLAttributes } from 'react'

import './style.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    labelChoose: string,
    name: string,
    value:string
}

const TextArea : React.FC<TextAreaProps> = ({ labelChoose, name, ...rest }) => {
    return(
        <div className='animatedTextArea'>
            <textarea name={name} {...rest} required />
            <label htmlFor={name}>{labelChoose}</label>
        </div>
    )
}

export default TextArea