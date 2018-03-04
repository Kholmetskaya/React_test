import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';
import '../css/signin.css';

class SignIn extends Component {
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
    signIn(){
        
        const { email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error})
            })
    }


    render(){
      
        return(
            <div className='form_inline'>
                <h2>Войти</h2>
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
                    onClick={() => this.signIn() }
                    >
                    Войти
                    </button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to='/signup'>Перейти к регистрации</Link></div>
            </div>
        )
    }
}

export default SignIn;