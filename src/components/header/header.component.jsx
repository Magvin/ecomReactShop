import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/crown.svg';
//CSS
import './header.styles.scss'

const Header = () => (
    <header class="header">
        
        <Link className="logo-container" to="/">
        <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>

        </div>
        
    </header>
)

export default Header;