import React from 'react';
import { connect } from 'react-redux';
import FormAltaTarea from './FormAltaTarea';
import { agregarTarea } from '../redux/actions/tareaActions';
import Tareas from './Tareas';

const Contenido = ({ tareas, agregarTarea }) => {
  const handlerAgregarTarea = texto => {
    agregarTarea({ nombre: texto, realizada: false });
  };

  const realizarTarea = nombre => {
    let filtrado = tareas.filter(({ nombre: nombreTarea }) => nombreTarea !== nombre);
    const tareaARealizar = tareas.find(({ nombre: nombreTarea }) => nombreTarea === nombre);
    filtrado.push({ ...tareaARealizar, realizada: true });
    //setTareas(filtrado);
  };

  return (
    <div>
      <FormAltaTarea agregarTarea={handlerAgregarTarea} />
      <Tareas tareas={tareas} realizarTarea={realizarTarea} />
    </div>
  );
};

const mapStateToProps = ({ tareas: tareasReducer }) => ({
  tareas: tareasReducer.tareas,
});

const mapDispatchToProps = { agregarTarea };

export default connect(mapStateToProps, mapDispatchToProps)(Contenido);
