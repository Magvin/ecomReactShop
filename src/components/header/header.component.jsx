import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";
import { createStructuredSelector } from "reselect";
//CSS
import { HeaderContainer, LogoContainer, OptionsContainer,OptionLink } from './header.styles'
// Components
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.action";

const Header = ({ currentUser, cart,signOut }) => (
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
        <OptionLink to="/" onClick={() => signOut()}>
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

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);
