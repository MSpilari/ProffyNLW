import React from "react";

import Warning from "../../assets/images/icons/warning.svg";
import "./style.css";

const Busca = () => {
  return (
    <div className="noReturnWrapper">
      <h1>
        <img src={Warning} alt="Warning" /> Ops !!
      </h1>
      <p>
        Desculpe, não encontramos um proffy de acordo com os parâmetros da sua
        pesquisa.
      </p>
      <h2>Tente novamente.</h2>
    </div>
  );
};

export default Busca;
