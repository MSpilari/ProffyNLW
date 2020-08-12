import React from "react";

import PurpleHeart from "../../assets/images/icons/purple-heart.svg";
import Whatsapp from "../../assets/images/icons/whatsapp.svg";

import "./TeacherCardStyles.css";
import api from "../../services/api";

export interface TeacherCardProps {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  whatsapp: string;
  bio: string;
  cost: number;
  user_id: number;
}

interface TeacherObject {
  teacherObj: TeacherCardProps;
}

const TeacherCard: React.FC<TeacherObject> = ({ teacherObj }) => {
  function Connected(id: Number) {
    api
      .post("connections", {
        user_id: id,
      })
      .then(() => alert("Conexão realizada com o Proffy !!"))
      .catch((response) => console.log(response));
  }

  return (
    <div className="cardWrapper">
      <div className="photoNameWrapper">
        <div className="photo">
          <img src={teacherObj.avatar} alt="Foto do Proffy" />
        </div>
        <div className="nameWrapper">
          <strong>{teacherObj.name}</strong>
          <span>{teacherObj.subject}</span>
        </div>
      </div>
      <div className="welcomeTextWrapper">
        <p>{teacherObj.bio}</p>
      </div>
      <div className="priceWrapper">
        <span>Preço/Hora</span>
        <strong>
          {teacherObj.cost.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
      <div className="ContactWrapper">
        <button>
          <img src={PurpleHeart} alt="Favoritar" />
        </button>
        <a
          href={`https://wa.me/55${teacherObj.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => Connected(teacherObj.id)}
        >
          <img src={Whatsapp} alt="Whatsapp Icon" />
          <span>Entrar em contato</span>
        </a>
      </div>
    </div>
  );
};

export default TeacherCard;
