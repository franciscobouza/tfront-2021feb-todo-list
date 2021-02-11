import React, { useState } from 'react';

const FormAltaTarea = ({ agregarTarea }) => {
  const [texto, setTexto] = useState('');

  const handleChangeTexto = ({ target: { value } }) => {
    setTexto(value);
  };

  const btnAgregarClick = () => {
    if (texto) {
      agregarTarea(texto);
      setTexto('');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Ingrese la tarea..." value={texto} onChange={handleChangeTexto} />
      <button onClick={btnAgregarClick}>Agregar</button>
    </div>
  );
};

export default FormAltaTarea;
