import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//Components
import { HomePage } from './components/pages/homepage/homepage.components';
import ShopPage  from './components/pages/shop/shop.components'



function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={ HomePage }/>
      <Route exact path='/shop' component={ ShopPage } />
      </Switch>
    </div>
  );
}

export default App;
