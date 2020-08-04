import React from 'react';
import { Switch } from 'react-router-dom'

import './assets/styles/globalstyle.css'
import Routes  from './routes'


function App() {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
