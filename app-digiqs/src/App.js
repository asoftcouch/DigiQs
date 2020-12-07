
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Route path="/">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
