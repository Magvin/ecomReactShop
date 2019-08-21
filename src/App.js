import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

//Components
import { HomePage } from './components/pages/homepage/homepage.components';
import ShopPage  from './components/pages/shop/shop.components';
import SignInAndSignUp from './components/pages/sigin-and-signup/sigin-and-signup.component';

// Utils
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubsciveFromAuth = null;

  componentDidMount() {
    this.unsubsciveFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})

      console.log(user)
    })
  }
  
  componentWillUnmount() {
    this.unsubsciveFromAuth();
  }



  render() {
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
}

export default App;
