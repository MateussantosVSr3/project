import React, { useState } from 'react';
import "./Classification.css";
import Piloto from '../../../assets/Edu.png';

export default function Classification() {
  // Estado para controlar a visibilidade da main-container
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar a visibilidade
  const handleIconClick = () => {
    setIsVisible(prevState => !prevState); // Alterna entre true e false
  };

  return (
    <div className="Classification">
      {/* Ícone fa-eye que alterna a visibilidade da main-container */}
      <i 
        className="fa-solid fa-eye" 
        onClick={handleIconClick} 
        style={{ fontSize: '30px', cursor: 'pointer' }}
      ></i>

      {/* main-container que será exibida ou escondida ao clicar no ícone */}
      {isVisible && (
        <div className="main-container">
          <div className="pilots">
            <img className="photo" src={Piloto} alt="Piloto" />
            <i className="fa-solid fa-arrow-right"></i>
          </div>

          <div className="main-box">
            <div>
              <span></span>
              <h3>Position</h3>
              <div className="text">
                <h2>16°</h2>
              </div>
            </div>
          </div>

          <div className="main-box">
            <span></span>
            <h3>FanBoost</h3>
            <div className="text">
              <h2>57 Votes</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}