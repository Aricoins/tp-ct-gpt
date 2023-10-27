import React, { useState } from 'react';
import './RandomColor.css';

const RandomColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffff00'); // Amarillo inicial

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; // Genera un color hexadecimal aleatorio
    setBackgroundColor(randomColor);
  };

  return (
    <div className="random-color-container" style={{ backgroundColor }}>
      <div className="content-container">
        <button onClick={changeColor}>Change Color</button>
        <p>Henry's | Change Color App</p>
      </div>
    </div>
  );
};

export default RandomColor;
