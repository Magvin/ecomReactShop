import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// Components 
import FormInput from '../reusable-components/form-input/form-input.component';
import CustomButton from '../reusable-components/button/custom-button';

// Utils
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// CSS
import './sign-up.styles.scss';
class SignUpComponent extends Component {
    constructor() {
        super();

        this.state = {
            
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
            
        }
    }

    // Functionality

     handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("Password don't match ")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)

           await createUserProfileDocument(user, { displayName } )

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: ''
           })

           return <Redirect to = '/sigin'/>
           
           
        } catch(error) {
            this.setState({
                errorMessage: error.message
            })
            console.error(error.message)

        }

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]:value})
    }
    render() {
        const { displayName, email, password, confirmPassword, errorMessage } = this.state;
        return (
            <div className="sign-up">
                <div class="alert" style={{color:'red'}}>{errorMessage}</div>
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={ this.handleSubmit}>
                    <FormInput
                    type = "text"
                    name = "displayName"
                    value = { displayName }
                    onChange = { this.handleChange }
                    label = "Name" 
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value = { email }
                    onChange = { this.handleChange }
                    label = "Email" 
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value = { password }
                    onChange = { this.handleChange }                    
                    label = "Password" 
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value = { confirmPassword }
                    onChange = { this.handleChange }
                    label = "Confirm Password" 
                    required
                    />
                    <CustomButton type="submit"  text="Sign up"/>
                </form>
                
            </div>
        );
    }
}

export default SignUpComponent;