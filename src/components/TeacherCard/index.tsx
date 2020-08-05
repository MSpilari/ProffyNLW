import React from 'react'

import PurpleHeart from "../../assets/images/icons/purple-heart.svg";
import Whatsapp from "../../assets/images/icons/whatsapp.svg";

import './TeacherCardStyles.css'

const TeacherCard = () => {
    return(
        <div className="cardWrapper">
        <div className="photoNameWrapper">
          <div className="photo">
            <img
              src="https://avatars1.githubusercontent.com/u/60487141?s=400&v=4"
              alt="Foto do Proffy"
            />
          </div>
          <div className="nameWrapper">
            <strong>Matheus B. Spilari</strong>
            <span>Física</span>
          </div>
        </div>
        <div className="welcomeTextWrapper">
          <span>Entusiasta das melhores tecnologias de física avançada.</span>
          <p>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            passoas através de experiências. Mais de 200.000 pessoas já passaram
            por uma das minhas explosões.
          </p>
        </div>
        <div className="priceWrapper">
          <span>Preço/Hora</span>
          <strong>R$ 80,00</strong>
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
}

export default TeacherCard