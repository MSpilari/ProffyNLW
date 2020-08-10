import React, { useState } from "react";

import { Link } from "react-router-dom";

import Back from "../../assets/images/icons/back.svg";
import Logo from "../../assets/images/logo.svg";

import AnimatedInput from '../../components/AnimatedInput';
import SelectAnimated from '../../components/SelectAnimated';

import './headerstyle.css';

interface HeaderCompProps{
    title: string,
    study?: boolean,
    teacher?: boolean
}

const HeaderComp : React.FC<HeaderCompProps> = ({ title, study, teacher }) => {
  const [subject, setSubject] = useState(() => '')
  const [week_day, setWeek_day] = useState(() => '')
  const [time, setTime] = useState(() => '')
  
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
            <SelectAnimated 
              labelChoose="Matéria" 
              name={'subject'}
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                {value:'Física', label: 'Física'},
                {value:'Química', label: 'Química'},
                {value:'Matemática', label: 'Matemática'},
                {value:'Artes', label: 'Artes'},
                {value:'Gramática', label: 'Gramática'},
                {value:'Biologia', label: 'Biologia'},
                {value:'Educação Física', label: 'Educação Física'},
                {value:'História', label: 'História'},
                {value:'Geografia', label: 'Geografia'},
              ]} 
            />
            <SelectAnimated 
                labelChoose={"Dia da semana"} 
                name={"week_day"}
                value={week_day}
                onChange={e => setWeek_day(e.target.value)}
                options={[
                  {value:'0', label: 'Domingo'},
                  {value:'1', label: 'Segunda-feira'},
                  {value:'2', label: 'Terça-feira'},
                  {value:'3', label: 'Quarta-feira'},
                  {value:'4', label: 'Quinta-feira'},
                  {value:'5', label: 'Sexta-feira'},
                  {value:'6', label: 'Sábado'},
                ]}
              />
            <AnimatedInput 
              labelChoose="Horário" 
              name={'time'} 
              type={'time'} 
              value={time} 
              onChange={e => setTime(e.target.value)}
              />
          </div>
      }
      
    </div>
  );
};

export default HeaderComp;