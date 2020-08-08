import React from 'react'

import './style.css'

interface SelectProps {
    labelChoose: string,
    name: string,
    options: Array<{
        value: string,
        label: string
    }>
}

const SelectAnimated : React.FC<SelectProps> = ({ labelChoose, name, options}) => {
    return(
        <div className='SelectAnimated'>
            <select name={name}   required>
                <option value='#'  hidden>Selecione uma opção</option>
                { options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                }) }
            </select>
            <label htmlFor={name}>{labelChoose}</label>
        </div>
    )
}

export default SelectAnimated