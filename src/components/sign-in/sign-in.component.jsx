import React from 'react';
import FormInput from '../reusable-components/form-input/form-input.component';
// CSS
import './sign-in.styles.scss'
import CustomButton from '../reusable-components/button/custom-button';


class SigIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email:'', password: ''})
    }

    handleChange = (event) => {
        const { value, name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I'm already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required
                        label="Email" />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="Password"
                        required
                         />
                    <CustomButton type={'submit'} text={'Submit'} ></CustomButton>
                </form>
                
            </div>
        )
    }
}
export default SigIn;