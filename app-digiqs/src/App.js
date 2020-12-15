
import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'

import Inventario from './pages/Inventario';
import Dashboard from './pages/Dashboard';

//Componentes 
import Nav from './components/Nav';
import NotiBar from './components/NotiBar';
import CreateOrder from './components/createOrder';
import CreateInventory from './components/createInventory';
import Clients from './components/Clients';
import Orders from './components/Orders';


//Styles
import Style from './styles/app.css';





function App() {


  return (
    <div className="Page-wrapper">

      <div className="Navigation-bar">

      <Nav />

      </div>
      
        <div className="Page-view">
        
          <div className="Viewer">
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/inventory" exact>
                <CreateInventory />
                <Inventario />
              </Route>

              <Route path="/Orders" >
                <Orders />
              </Route>



              <Route path="/Clients">
                <Clients />
              </Route>
            </Switch>
          </div>
        </div>

        {/* <div className="Notifications-bar">
        //Habilitar si termino los componentes de notificaciones
        <NotiBar />

        </div> */}

      
    </div>
  );
}

export default App;
