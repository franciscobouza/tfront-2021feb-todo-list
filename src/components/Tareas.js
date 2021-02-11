import React from 'react';
import Tarea from './Tarea';

const Tareas = ({ tareas, realizarTarea }) => {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <Tarea key={index} tarea={tarea} realizarTarea={realizarTarea} />
      ))}
    </div>
  );
};

export default Tareas;
