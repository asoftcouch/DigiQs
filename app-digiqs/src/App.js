
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
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
