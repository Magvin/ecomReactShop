import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
//CSS
import './header.styles.scss'
// Utils
import { auth } from '../../firebase/firebase.utils';
// Components
import CartIcon from '../cart-icon/cart-icon.components';

const Header = ({currentUser}) => (
    <header class="header">
        
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                 <Link 
                 className="option" 
                 to="/" 
                 onClick={()=> auth.signOut() }
                 >
                     SIGNOUT
                </Link>
                 :
                 <Link 
                 className="option" 
                 to="/signin"
                 >
                     LOGIN
                </Link>
            }
            <CartIcon/>
            


        </div>
        
    </header>
)

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);