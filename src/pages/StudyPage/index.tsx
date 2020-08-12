import React, { useState, FormEvent } from "react";

import HeadComp from "../../components/Header";
import SelectAnimated from '../../components/SelectAnimated'
import AnimatedInput from '../../components/AnimatedInput'
import TeacherCard, { TeacherCardProps } from '../../components/TeacherCard';
import Busca from "../../components/Busca";

import "./StudyPage.css";

import api from "../../services/api";


const StudyPage = () => {

  const [subject, setSubject] = useState(() => "");
  const [week_day, setWeek_day] = useState(() => "");
  const [time, setTime] = useState(() => "");
  const [searchResult, setSearchResult] = useState(() => [])


  const SearchForTeacher = (e: FormEvent) => {
    e.preventDefault()

    api.get(`classes?week_day=${week_day}&subject=${subject}&time=${time}`)
      .then(response =>  setSearchResult(response.data))
      .catch(() =>  setSearchResult([])) 
  }
  
  return (
    <div className="pageStudy">
      <HeadComp title={"Estes são os Proffys disponíveis."}/>
  
      <form className='FormWrapper' onSubmit={(e) => SearchForTeacher(e)}>
          <div className="inputsWrapper">
            <SelectAnimated
              labelChoose="Matéria"
              name={"subject"}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
                { value: "Inglês", label: "Inglês" },
                { value: "Espanhol", label: "Espanhol" },
              ]}
            />
            <SelectAnimated
              labelChoose={"Dia da semana"}
              name={"week_day"}
              value={week_day}
              onChange={(e) => setWeek_day(e.target.value)}
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
              labelChoose="Horário"
              name={"time"}
              type={"time"}
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button type="submit">Pesquisar</button>
          </div>
        </form> 
          {
            searchResult.length === 0 ? 
            <Busca /> :
            searchResult.map((teacher: TeacherCardProps) => <TeacherCard key={teacher.id} teacherObj={teacher}/>)
          } 
    </div>
  );
};

export default StudyPage;
