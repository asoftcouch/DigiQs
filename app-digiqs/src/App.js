
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Inventario from './pages/Inventario';
//Componentes 
import Nav from './components/Nav';

//Styles
import Style from './styles/app.css';


function App() {
  return (
    <div className="Page-wrapper">

      <div className="Navigation-bar">

      <Nav />

      </div>
      
        <div className="Page-view">
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/Inventario">
            <Inventario />
          </Route>
        </Switch>
        </div>

        <div className="Notifications-bar">

        </div>
      
    </div>
  );
}

export default App;
