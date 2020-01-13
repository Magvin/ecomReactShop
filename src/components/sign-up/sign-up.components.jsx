import React, { Component } from 'react'

// Components 
import FormInput from '../reusable-components/form-input/form-input.component';
import CustomButton from '../reusable-components/button/custom-button';
// Redux
import { connect } from 'react-redux';
import { signUpOnStart } from '../../redux/user/user.action';
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

    static getDerivedStateFromProps(nextProps, prevState) {
      
        if(nextProps.error !== null) {
            console.log(nextProps.error)
            return {
                errorMessage: nextProps.error
            }
        } else {
            return {
                errorMessage: ''
            }
        }
        
      }
     handleSubmit = async (e) => {
        e.preventDefault(); 
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpOnStart } = this.props;
        if(password !== confirmPassword) {
            alert("Password don't match ")
            return;
        }
        signUpOnStart(email,password,displayName)
        
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]:value})
    }
    render() {
        const { displayName, email, password, confirmPassword, errorMessage } = this.state;
        return (
            <div className="sign-up">
                <div className="alert" style={{color:'red'}}>{errorMessage}</div>
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

const mapDispatchToProps = (dispatch) => ({
    signUpOnStart: (email,password,displayName) => dispatch(signUpOnStart({email,password,displayName}))
})

const mapStateToProps = state => ({
    error: state.user.errorMessage
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpComponent);