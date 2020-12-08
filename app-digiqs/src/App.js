
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
    <div>
      <div className="DigiQs-header">
        <div className="Logo">
          <br/>
          <h1>DigiQs</h1>
          <p>Inventory Management & Analytics</p>
          <br/>
        </div>
      </div>
      <div className="Page-Wrapper">
        <div className="Navigation">
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
      </div>
    </div>
  );
}

export default App;
