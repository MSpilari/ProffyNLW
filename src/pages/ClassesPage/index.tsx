import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import Warning from "../../assets/images/icons/warning.svg";

import HeaderComp from "../../components/Header";
import AnimatedInput from "../../components/AnimatedInput";
import TextArea from "../../components/TextAreaAnimated";
import SelectAnimated from "../../components/SelectAnimated";

import "./ClassesPagestyles.css";
import api from "../../services/api";

const ClassesPage = () => {
  const history = useHistory()
  
  const firstSchedule = { week_day: '0', from: "", to: "" };

  const [ AllSchedules, setAllSchedules ] = useState(() => [firstSchedule]);
  
  const [ name, setName ] = useState(() => '')
  const [ avatar, setAvatar ] = useState(() => '')
  const [ whatsapp, setWhatsapp ] = useState(() => '')
  const [ bio, setBio ] = useState(() => '')
 
  const [ subject, setSubject ] = useState(() => '')
  const [ cost, setCost ] = useState(() => '')
 

  function setScheduleItemValue(position:Number, field:string, value:string){
    
    const updatedScheduleItems = AllSchedules.map((scheduleItem, index) => {
      if(index === position){
        return{
          ...scheduleItem,
          [field]: value
        }
      }

      return scheduleItem
    })

    setAllSchedules(updatedScheduleItems)
  }
  
  function SubmitForm(e: FormEvent){
    e.preventDefault()
    
    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: AllSchedules
    }).then(() => {
      alert('Cadastro realizado com sucesso.')
    }).catch(() => {
      alert('Erro no cadastro.')
    })
    
    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      AllSchedules
    })
    
    history.push('/')
  }
  return (
    <div className="teacherPage">
      <HeaderComp title={"Que incrível que você quer dar aulas."} teacher />
      <main>
        <form action="" onSubmit={(e) => SubmitForm(e)}>
          <div className="fieldSetWrapper">
            <fieldset>
              <div className="fieldsetTitle">
                <h1>Seus Dados</h1>
              </div>
              <AnimatedInput
                labelChoose={"Nome Completo"}
                name={"name"}
                value={name}
                onChange={e => setName(e.target.value)}
                type={"text"}
              />
              <AnimatedInput
                labelChoose={"Link da sua foto"}
                name={"avatar"}
                value={avatar}
                onChange = {e => setAvatar(e.target.value)}
                type={"text"}
              />
              <AnimatedInput
                labelChoose={"Whatsapp"}
                name={"whatsapp"}
                value={whatsapp}
                onChange = {e => setWhatsapp(e.target.value)}
                type={"text"}
              />
              <TextArea 
                labelChoose={"Bio"} 
                name={"bio"} 
                value={bio}
                onChange = {e => setBio(e.target.value)} 
              />
            </fieldset>

            <fieldset>
              <div className="fieldsetTitle">
                <h1>Sobre a aula</h1>
              </div>
              <SelectAnimated
                labelChoose={"Matéria"}
                name={"subject"}
                value={subject}
                onChange= {e => setSubject(e.target.value)}
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
                value={cost}
                onChange= {e => setCost(e.target.value)}
                type={"number"}
              />
            </fieldset>

            <fieldset>
              <div className="fieldsetTitle">
                <h1>Horários disponíveis</h1>
                <button
                  type="button"
                  onClick={() =>
                    setAllSchedules([...AllSchedules, firstSchedule])
                  }
                >
                  + Novo horário
                </button>
              </div>

              {AllSchedules.map((schedule, index) => {
                return (
                  <div key={index} className="hoursWrapper">
                    <SelectAnimated
                      labelChoose={"Dia da semana"}
                      name={"week_day"}
                      value={schedule.week_day}
                      onChange = {(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                      value={schedule.from}
                      onChange = {(e) => setScheduleItemValue(index, 'from', e.target.value)}
                      type={"time"}
                    />

                    <AnimatedInput
                      labelChoose={"Encerramento"}
                      name={"to"}
                      value={schedule.to}
                      onChange = {(e) => setScheduleItemValue(index, 'to', e.target.value)}
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
