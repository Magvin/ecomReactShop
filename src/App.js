import React, { useEffect} from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import { HomePage } from './components/pages/homepage/homepage.components';
import ShopPage from './components/pages/shop/shop.components';
import SignInAndSignUp from './components/pages/sigin-and-signup/sigin-and-signup.component';
import Header from './components/header/header.component';
import CheckoutPage from './components/pages/checkout/checkout.component';
//Actions Redux
import { userCheckSession } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';



const App =({ userCheckSession, currentUser})=> {
	

	useEffect(()=> {
		userCheckSession()
	},[userCheckSession])


	

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/signin" render={() => (currentUser === null ? <SignInAndSignUp /> : <Redirect to="/" />)} />
				</Switch>
			</div>
		);
	}


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	userCheckSession: ()=> dispatch(userCheckSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
