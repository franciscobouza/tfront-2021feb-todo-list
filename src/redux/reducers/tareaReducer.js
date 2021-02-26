const initialState = {
  tareas: [],
};

export default function tareaReducer(state = initialState, action) {
  switch (action.type) {
    case 'AGREGAR_TAREA':
      return { ...state, tareas: [action.tarea, ...state.tareas] };
    default:
      return state;
  }
}
