import React from 'react'

import './style.css'

interface AnimatedInputProps {
    labelChoose: string,
    name: string,
    type: string
}

const AnimatedInput : React.FC<AnimatedInputProps> = ({ labelChoose, name, type }) => {
    return(
        <div className='animatedInput'>
            <input name={name} type={type} required />
            <label htmlFor={name}>{labelChoose}</label>
        </div>
    )
}

export default AnimatedInput