import React from "react";

import { Link } from "react-router-dom";

import Back from "../../assets/images/icons/back.svg";
import Logo from "../../assets/images/logo.svg";

import AnimatedInput from '../../components/AnimatedInput';

import './headerstyle.css';

interface HeaderCompProps{
    title: string,
    study?: boolean,
    teacher?: boolean
}

const HeaderComp : React.FC<HeaderCompProps> = ({ title, study, teacher }) => {
  return (
    <div className="allWrapper">
      <div className="linksWrapper">
        <Link to="/">
          <img src={Back} alt="Back Arrow" />
        </Link>
        <img src={Logo} alt="Proffys Logo" />
      </div>
      <div className="textWrapper">
        <strong>{ title }</strong>
        {
          teacher && 
            <p>O primeiro passo é preencher esse formulário de inscrição.</p>
        }
      </div>
      {
        study && 
          <div className="inputsWrapper">
            <AnimatedInput labelChoose="Matéria" name={'subject'} />
            <AnimatedInput labelChoose="Dia da semana" name={'week_day'} />
            <AnimatedInput labelChoose="Horário" name={'time'} />
          </div>
      }
      
    </div>
  );
};

export default HeaderComp;