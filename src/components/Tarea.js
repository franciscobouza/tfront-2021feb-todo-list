import React from 'react';

const Tarea = ({ tarea: { nombre, realizada }, realizarTarea }) => (
  <>
    <h3 className={realizada ? 'Tarea-realizada' : ''}>Tarea: {nombre}</h3>
    <button onClick={() => realizarTarea(nombre)} disabled={realizada}>
      Pronta!
    </button>
  </>
);

export default Tarea;
