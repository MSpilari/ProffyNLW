import React from "react";

import { Link } from "react-router-dom";

import Back from "../../assets/images/icons/back.svg";
import Logo from "../../assets/images/logo.svg";

import AnimatedInput from '../../components/AnimatedInput';

import './headerstyle.css';

interface HeaderCompProps{
    title: string
}

const HeaderComp : React.FC<HeaderCompProps> = ({ title }) => {
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
      </div>
      <div className="inputsWrapper">
        <AnimatedInput labelChoose="Matéria" />
        <AnimatedInput labelChoose="Dia da semana" />
        <AnimatedInput labelChoose="Horário" />
      </div>
    </div>
  );
};

export default HeaderComp;