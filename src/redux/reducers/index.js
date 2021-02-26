import { combineReducers } from 'redux';
import tareas from './tareaReducer';

const rootReducer = combineReducers({
  tareas,
});

export default rootReducer;
