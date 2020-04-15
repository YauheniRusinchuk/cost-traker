import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'
import LoginPage from './pages/login-page';
import HomePage from './pages/home-page';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/login/' component={LoginPage} />
    </Switch>
  );
}

export default App;
