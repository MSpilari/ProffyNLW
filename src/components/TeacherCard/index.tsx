import React from 'react'

import PurpleHeart from "../../assets/images/icons/purple-heart.svg";
import Whatsapp from "../../assets/images/icons/whatsapp.svg";

import './TeacherCardStyles.css'
import Busca from '../Busca';


interface TeacherCardProps{
    teacher:{
      avatar?: string,
      name?: string,
      subject?: string,
      whatsapp?: string,
      bio?: string,
      cost?: Number,
    }  
  
}

const TeacherCard: React.FC<TeacherCardProps> = ({teacher}) => {
  
  if(teacher.name !== undefined){
    return(
      <div className="cardWrapper">
      <div className="photoNameWrapper">
        <div className="photo">
          <img
            src={teacher.avatar}
            alt="Foto do Proffy"
          />
        </div>
        <div className="nameWrapper">
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </div>
      <div className="welcomeTextWrapper">
        <p>
          {teacher.bio}
        </p>
      </div>
      <div className="priceWrapper">
        <span>Preço/Hora</span>
        <strong>R$ {teacher.cost}</strong>
      </div>
      <div className="ContactWrapper">
        <button>
          <img src={PurpleHeart} alt="Favoritar" />
        </button>
        <button>
          <img src={Whatsapp} alt="Whatsapp Icon" />
          <span>Entrar em contato</span>
        </button>
      </div>
    </div>
    )
  }else{
    return <Busca />
  }
  
  
}

export default TeacherCard