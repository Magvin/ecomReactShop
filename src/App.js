import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//Components
import { HomePage } from './components/pages/homepage/homepage.components';
import ShopPage  from './components/pages/shop/shop.components';
import SignInAndSignUp from './components/pages/sigin-and-signup/sigin-and-signup.component';



function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={ HomePage } />
      <Route exact path='/shop' component={ ShopPage } />
      <Route exact path='/signin' component={ SignInAndSignUp } />
      </Switch>
    </div>
  );
}

export default App;
