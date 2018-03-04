import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import '../css/signup.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            error: {
                message:""
            }
        }
    }
    signUp(){
        console.log('this.state',this.state);
        const { email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error})
            })
    }


    render(){
        return(
            <div className='form_inline'>
                <h2>Регистрация</h2>
                <div className='form_group'>
                    <input 
                    className='form_control'
                    type='text'
                    placeholder='email'
                    onChange={event => this.setState({email:event.target.value})}
                    />
                     <input 
                    className='form_control'
                    type='password'
                    placeholder='password'
                    onChange={event => this.setState({password:event.target.value})}
                    />
                     <button
                    className='button'
                    type='button'
                    onClick={() => this.signUp() }
                    >
                    Зарегистрироваться
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to='/signin'>Уже зарегистрировался? </Link></div>
            </div>
        )
    }
}

export default SignUp;