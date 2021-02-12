import Contenido from './components/Contenido';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>ToDo List</h2>
      </header>
      <Switch>
        <Route path="/tareas" component={Contenido} />
        <Route path="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
