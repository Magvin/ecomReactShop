import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
import { createStructuredSelector } from 'reselect';
//CSS
import './header.styles.scss'
// Utils
import { auth } from '../../firebase/firebase.utils';
// Components
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser,cart}) => (
    <header className="header">
        
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
        {cart ? null : <CartDropdown/> }
        
        
    </header>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    cart: selectCartHidden
})

export default connect(mapStateToProps)(Header);