import React from "react";
import { Link } from "react-router-dom";

import Back from "../../assets/images/icons/back.svg";
import Logo from "../../assets/images/logo.svg";

import AnimatedInput from '../../components/AnimatedInput'

import "./StudyPage.css";

const StudyPage = () => {
  return (
    <div className='pageStudy'>
      <div className="allWrapper">
        <div className="linksWrapper">
          <Link to="/">
            <img src={Back} alt="Back Arrow" />
          </Link>
          <img src={Logo} alt="Proffys Logo" />
        </div>
        <div className="textWrapper">
          <strong>Estes são os proffys disponíveis</strong>
        </div>
        <div className="inputsWrapper">
          <AnimatedInput labelChoose='Matéria' />
          <AnimatedInput labelChoose='Dia da semana' />
          <AnimatedInput labelChoose='Horário' />
        </div>
      </div>
    </div>
  );
};

export default StudyPage;
