import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './components/pages/homepage/homepage.components';

const HatsPage =()=> {
  return(
    <div>
    <h1>Hats</h1>
  </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
