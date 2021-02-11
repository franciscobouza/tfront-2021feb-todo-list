import React from 'react';
import Tarea from './Tarea';

const Tareas = ({ tareas }) => {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <Tarea key={index} texto={tarea} />
      ))}
    </div>
  );
};

export default Tareas;
