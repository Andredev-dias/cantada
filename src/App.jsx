import React, { useState } from 'react';
import './App.css';

function App() {
  const [hovering, setHovering] = useState(false);

  const handleYesClick = () => {
    var numeroTelefone = '5541999994084';

    var linkWhatsApp = "https://wa.me/" +
        numeroTelefone +
        "?text=Claro que sim!!! Pode me buscar às 8 da noite"

    window.open(linkWhatsApp, "_blank")
    window.open('https://www.youtube.com/watch?v=-ZByWa9hH5s&list=RD-ZByWa9hH5s&index=1', '_blank');
  };

  const handleNoMouseEnter = () => {
    setHovering(true);
  };

  const handleNoMouseLeave = () => {
    setHovering(false);
  };

  return (
    <div className="container">
      <h1>Você quer sair comigo sexta?</h1>
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