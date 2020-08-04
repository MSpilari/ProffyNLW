import React from'react'
import { Link } from 'react-router-dom'
import './LandingStyle.css'

import LandingImg from '../../assets/images/landing.svg'
import LogoProffy from '../../assets/images/logo.svg'
import StudyIcon from '../../assets/images/icons/study.svg'
import ClassesIcon from '../../assets/images/icons/give-classes.svg' 
import PurpleHeart from '../../assets/images/icons/purple-heart.svg' 

const Landing = () => {
    return(
        <div className="LandingWrapper">
            <div className="logoProffy">
                <img src={LogoProffy} alt="Proffy Logo"/>
            </div>
            <div className="landingImg">
                <img src={LandingImg} alt="LandingImg"/>
            </div>
            <div className="textWrapper">
                <span>Seja bem-vindo.</span>
                <span>O que deseja fazer ?</span>
            </div>
            <div className="buttonWrapper">
                <Link to="/study">
                    <img src={StudyIcon} alt="Study"/>
                    Estudar
                </Link>
                <Link to="/give-classes">
                    <img src={ClassesIcon} alt="Classes"/>
                    Dar aulas
                </Link>
            </div>
            <div className="connectionWrapper">
                <p>Total de 200 conexões já realizadas.</p>
                <img src={PurpleHeart} alt="Coração"/>
            </div>
        </div>
    )
}

export default Landing