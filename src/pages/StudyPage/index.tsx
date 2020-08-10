import React, { useEffect } from "react";

import HeadComp from "../../components/Header";
import TeacherCard from '../../components/TeacherCard';

import "./StudyPage.css";
import api from "../../services/api";

const StudyPage = () => {

  useEffect(() => {
    
    api.get('classes?week_day=1&subject=Biologia&time=9%3A00')
      .then(response => console.log(response.data))

  }, [])
  return (
    <div className="pageStudy">
      <HeadComp title={"Estes são os Proffys disponíveis."} study />
      <TeacherCard />      
    </div>
  );
};

export default StudyPage;
