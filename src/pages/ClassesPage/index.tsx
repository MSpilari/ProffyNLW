import React, { useState } from "react";

import Warning from "../../assets/images/icons/warning.svg";

import HeaderComp from "../../components/Header";
import AnimatedInput from "../../components/AnimatedInput";
import TextArea from "../../components/TextAreaAnimated";
import SelectAnimated from "../../components/SelectAnimated";

import "./ClassesPagestyles.css";

const ClassesPage = () => {
  const firstInput = { week_day: 0, from: "", to: "" };

  const [classesInputs, setClassesInputs] = useState(() => [firstInput]);

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
              <AnimatedInput
                labelChoose={"Nome Completo"}
                name={"name"}
                type={"text"}
              />
              <AnimatedInput
                labelChoose={"Link da sua foto"}
                name={"avatar"}
                type={"text"}
              />
              <AnimatedInput
                labelChoose={"Whatsapp"}
                name={"whatsapp"}
                type={"text"}
              />
              <TextArea labelChoose={"Bio"} name={"bio"} />
            </fieldset>

            <fieldset>
              <div className="fieldsetTitle">
                <h1>Sobre a aula</h1>
              </div>
              <SelectAnimated
                labelChoose={"Matéria"}
                name={"subject"}
                options={[
                  { value: "Física", label: "Física" },
                  { value: "Química", label: "Química" },
                  { value: "Matemática", label: "Matemática" },
                  { value: "Artes", label: "Artes" },
                  { value: "Gramática", label: "Gramática" },
                  { value: "Biologia", label: "Biologia" },
                  { value: "Educação Física", label: "Educação Física" },
                  { value: "História", label: "História" },
                  { value: "Geografia", label: "Geografia" },
                ]}
              />
              <AnimatedInput
                labelChoose={"Custo da sua hora por aula"}
                name={"cost"}
                type={"number"}
              />
            </fieldset>

            <fieldset>
              <div className="fieldsetTitle">
                <h1>Horários disponíveis</h1>
                <button
                  type="button"
                  onClick={() =>
                    setClassesInputs([...classesInputs, firstInput])
                  }
                >
                  + Novo horário
                </button>
              </div>

              {classesInputs.map((classes, index) => {
                return (
                  <div key={index} className="hoursWrapper">
                    <SelectAnimated
                      labelChoose={"Dia da semana"}
                      name={"week_day"}
                      options={[
                        { value: "0", label: "Domingo" },
                        { value: "1", label: "Segunda-feira" },
                        { value: "2", label: "Terça-feira" },
                        { value: "3", label: "Quarta-feira" },
                        { value: "4", label: "Quinta-feira" },
                        { value: "5", label: "Sexta-feira" },
                        { value: "6", label: "Sábado" },
                      ]}
                    />

                    <AnimatedInput
                      labelChoose={"Início"}
                      name={"from"}
                      type={"time"}
                    />

                    <AnimatedInput
                      labelChoose={"Encerramento"}
                      name={"to"}
                      type={"time"}
                    />
                  </div>
                );
              })}
            </fieldset>
            <div className="warningWrapper">
              <span>
                <img src={Warning} alt="WarningIcon" />
                Importante ! <br /> Preencha todos os dados.
              </span>

              <button type="submit">Salvar Cadastro</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ClassesPage;
