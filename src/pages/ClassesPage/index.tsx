import React from 'react'

import HeaderComp from '../../components/Header'
import AnimatedInput from  '../../components/AnimatedInput'

import './ClassesPagestyles.css'
const ClassesPage = () => {
    return(
        <div className='teacherPage'>
            <HeaderComp title={'Que incrível que você quer dar aulas.'} teacher />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>
                    <AnimatedInput labelChoose={'Nome Completo'} name={'name'}/>
                    <AnimatedInput labelChoose={'Link da sua foto'} name={'avatar'}/>
                    <AnimatedInput labelChoose={'Whatsapp'} name={'whatsapp'}/>
                    <AnimatedInput labelChoose={'Biografia'} name={'bio'}/>
                </fieldset>
            </main>
            
        </div>
    )
}

export default ClassesPage