import React, { useState } from 'react';
import FormAltaTarea from './FormAltaTarea';
import Tareas from './Tareas';

const Contenido = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = texto => {
    setTareas([...tareas, texto]);
  };

  return (
    <div>
      <FormAltaTarea agregarTarea={agregarTarea} />
      <Tareas tareas={tareas} />
    </div>
  );
};

export default Contenido;
