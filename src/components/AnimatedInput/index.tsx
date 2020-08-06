import React from 'react'

import './style.css'

interface AnimatedInputProps {
    labelChoose: string,
    name: string
}

const AnimatedInput : React.FC<AnimatedInputProps> = ({ labelChoose, name }) => {
    return(
        <div className='animatedInput'>
            <input name={name} type="text" required />
            <label htmlFor={name}>{labelChoose}</label>
        </div>
    )
}

export default AnimatedInput