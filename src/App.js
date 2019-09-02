import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';


//Components
import { HomePage } from './components/pages/homepage/homepage.components';
import ShopPage  from './components/pages/shop/shop.components';
import SignInAndSignUp from './components/pages/sigin-and-signup/sigin-and-signup.component';
import Header from './components/header/header.component';
// Utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubsciveFromAuth = null;

  componentDidMount() {
    this.unsubsciveFromAuth = auth.onAuthStateChanged(async userAuth => {
      if( userAuth ) {

        const userRef = await createUserProfileDocument(userAuth); // storing userRef to check if our data is updated 

        userRef.onSnapshot(snapShot => {    // snapshot is data( in this case for user) represented from our database 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=> {
            console.log(this.state)
          })
        })
      }
      this.setState({currentUser: userAuth })
    })
  }
  
  componentWillUnmount() {
    this.unsubsciveFromAuth();
  }



  render() {
  return (
    <div>
      <Header currentUser= {this.state.currentUser}/>
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
