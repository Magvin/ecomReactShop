import React from 'react';
// Components
import SignIn from '../../sign-in/sign-in.component';
// CSS 
import './sigin-and-signup.styles.scss';
import SignUpComponent from '../../sign-up/sign-up.components';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUpComponent/>
    </div>
)

export default SignInAndSignUpPage;