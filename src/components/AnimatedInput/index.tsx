import React, { InputHTMLAttributes } from 'react'

import './style.css'

interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelChoose: string,
    name: string,
    type: string,
}

const AnimatedInput : React.FC<AnimatedInputProps> = ({ labelChoose, name, type, ...rest}) => {
    return(
        <div className='animatedInput'>
            <input name={name} type={type} {...rest} required />
            <label htmlFor={name}>{labelChoose}</label>
        </div>
    )
}

export default AnimatedInput