import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";
import { createStructuredSelector } from "reselect";
//CSS
import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink } from './header.styles'
// Utils
import { auth } from "../../firebase/firebase.utils";
// Components
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, cart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink to="/" onClick={() => auth.signOut()}>
          SIGNOUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          LOGIN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {cart ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cart: selectCartHidden
});

export default connect(mapStateToProps)(Header);
