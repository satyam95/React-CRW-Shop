import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle} from '../../firebase/firebase.utils';

import {SignInContainer, SignInTitle, ButtonBarContainer } from './sign-in.styles';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error){
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render(){
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='Email' 
                        required >
                    </FormInput>

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='Password' 
                        required >
                    </FormInput>

                    <ButtonBarContainer>

                        <CustomButton 
                            type='submit'>
                                Sign In
                        </CustomButton>

                        <CustomButton 
                            onClick={signInWithGoogle}
                            isGoogleSignIn >
                                {''}
                                Sign In With Google{''}
                        </CustomButton>

                    </ButtonBarContainer>

                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;