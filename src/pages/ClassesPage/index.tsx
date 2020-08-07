import React from "react";

import Warning from "../../assets/images/icons/warning.svg";

import HeaderComp from "../../components/Header";
import AnimatedInput from "../../components/AnimatedInput";
import TextArea from "../../components/TextAreaAnimated";

import "./ClassesPagestyles.css";
const ClassesPage = () => {
  return (
    <div className="teacherPage">
      <HeaderComp title={"Que incrível que você quer dar aulas."} teacher />
      <main>
        <form action="">
          <div className="fieldSetWrapper">
            <fieldset>
              <div className="fieldsetTitle">
                <h1>Seus Dados</h1>
              </div>
              <AnimatedInput labelChoose={"Nome Completo"} name={"name"} />
              <AnimatedInput labelChoose={"Link da sua foto"} name={"avatar"} />
              <AnimatedInput labelChoose={"Whatsapp"} name={"whatsapp"} />
              <TextArea labelChoose={"Bio"} name={"bio"} />
            </fieldset>
            <fieldset>
              <div className="fieldsetTitle">
                <h1>Sobre a aula</h1>
              </div>
              <AnimatedInput labelChoose={"Matéria"} name={"subject"} />
              <AnimatedInput
                labelChoose={"Custo da sua hora por aula"}
                name={"cost"}
              />
            </fieldset>
            <fieldset>
              <div className="fieldsetTitle">
                <h1>Horários disponíveis</h1>
                <button>+ Novo horário</button>
              </div>
              <AnimatedInput labelChoose={"Dia da semana"} name={"week_day"} />
              <AnimatedInput labelChoose={"Início"} name={"from"} />
              <AnimatedInput labelChoose={"Encerramento"} name={"to"} />
            </fieldset>
            <div className="warningWrapper">
              <img src={Warning} alt="WarningIcon" />
              <span>Importante ! <br /> Preencha todos os dados.</span>
            </div>
            <button type="submit">Salvar Cadastro</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ClassesPage;
