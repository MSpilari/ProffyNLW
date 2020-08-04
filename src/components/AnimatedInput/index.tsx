import React from 'react'

import './style.css'

interface AnimatedInputProps {
    labelChoose: string
}

const AnimatedInput : React.FC<AnimatedInputProps> = ({ labelChoose }) => {
    return(
        <div className='animatedInput'>
            <input name="Class" type="text" required />
            <label htmlFor="Class">{labelChoose}</label>
        </div>
    )
}

export default AnimatedInput