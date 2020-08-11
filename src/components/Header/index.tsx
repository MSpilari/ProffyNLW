import React from "react";

import { Link } from "react-router-dom";

import Back from "../../assets/images/icons/back.svg";
import Logo from "../../assets/images/logo.svg";

import "./headerstyle.css";

interface HeaderCompProps {
  title: string;
  teacher?:boolean;
}

const HeaderComp: React.FC<HeaderCompProps> = ({ title, teacher }) => {
  
  
  return (
    <div className="allWrapper">
      <div className="linksWrapper">
        <Link to="/">
          <img src={Back} alt="Back Arrow" />
        </Link>
        <img src={Logo} alt="Proffys Logo" />
      </div>
      <div className="textWrapper">
        <strong>{title}</strong>
        {teacher && 
          <p>O primeiro passo é preencher este formulário de inscrição.</p>}
      </div>
    </div>
  );
};

export default HeaderComp;
