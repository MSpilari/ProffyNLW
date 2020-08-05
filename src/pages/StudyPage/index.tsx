import React from "react";

import HeadComp from "../../components/Header";
import TeacherCard from '../../components/TeacherCard';

import "./StudyPage.css";

const StudyPage = () => {
  return (
    <div className="pageStudy">
      <HeadComp title={"Estes são os Proffys disponíveis."} />
      <TeacherCard />      
    </div>
  );
};

export default StudyPage;
