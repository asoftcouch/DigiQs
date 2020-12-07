
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Inventario from './pages/Inventario';
//Componentes 
import Nav from './components/Nav';



function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/Inventario">
          <Inventario />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
