import React, { useState } from 'react';
import './App.css';

function App() {
  const [hovering, setHovering] = useState(false);

  const handleYesClick = () => {
    var numeroTelefone = '5541999999999';

    var linkWhatsApp = "https://wa.me/" +
        numeroTelefone +
        "?text=Claro que sim!!! Pode me buscar às 8 da noite"

        window.open('https://www.youtube.com/');
        setTimeout(() => {
          window.open(linkWhatsApp, "_blank");
        }, 1000); 
      };

  const handleNoMouseEnter = () => {
    setHovering(true);
  };

  const handleNoMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="container">
      <h1>pergunta aqui</h1>
      <div className="buttons">
        <button className="yes-button" onClick={handleYesClick}>Sim</button>
        <button
          className={`no-button ${hovering ? 'hovering' : ''}`}
          onMouseEnter={handleNoMouseEnter}
          onMouseLeave={handleNoMouseLeave}
        >
          Não
        </button>
        {hovering && <p className='no'>Está opção está desabilitada no momento! 😧</p> }
      </div>
    </div>
  );
}

export default App;
