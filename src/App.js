import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import { HomePage } from './components/pages/homepage/homepage.components';
import ShopPage from './components/pages/shop/shop.components';
import SignInAndSignUp from './components/pages/sigin-and-signup/sigin-and-signup.component';
import Header from './components/header/header.component';
import CheckoutPage from './components/pages/checkout/checkout.component';
// Utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
//Actions Redux
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {
	unsubsciveFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubsciveFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth); // storing userRef to check if our data is updated

				userRef.onSnapshot(snapShot => {
					// snapshot is data( in this case for user) represented from our database
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubsciveFromAuth();
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/signin" render={() => (this.props.currentUser === null ? <SignInAndSignUp /> : <Redirect to="/" />)} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
