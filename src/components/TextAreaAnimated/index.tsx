import React from 'react'

import './style.css'

interface TextAreaProps {
    labelChoose: string,
    name: string
}

const TextArea : React.FC<TextAreaProps> = ({ labelChoose, name }) => {
    return(
        <div className='animatedTextArea'>
            <textarea name={name}  required />
            <label htmlFor={name}>{labelChoose}</label>
        </div>
    )
}

export default TextArea