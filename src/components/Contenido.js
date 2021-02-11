import React, { useState } from 'react';
import FormAltaTarea from './FormAltaTarea';
import Tareas from './Tareas';

const Contenido = () => {
  const [tareas, setTareas] = useState([
    { nombre: 'a', realizada: false },
    { nombre: 'b', realizada: false },
    { nombre: 'c', realizada: false },
  ]);

  const agregarTarea = texto => {
    setTareas([{ nombre: texto, realizada: false }, ...tareas]);
  };

  const realizarTarea = nombre => {
    let filtrado = tareas.filter(({ nombre: nombreTarea }) => nombreTarea !== nombre);
    const tareaARealizar = tareas.find(({ nombre: nombreTarea }) => nombreTarea === nombre);
    filtrado.push({ ...tareaARealizar, realizada: true });
    setTareas(filtrado);
  };

  return (
    <div>
      <FormAltaTarea agregarTarea={agregarTarea} />
      <Tareas tareas={tareas} realizarTarea={realizarTarea} />
    </div>
  );
};

export default Contenido;
