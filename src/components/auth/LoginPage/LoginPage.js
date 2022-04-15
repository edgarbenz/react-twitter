import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../api/auth'
//import './LoginPage.css';

function LoginPage( {isLogged} ) {
    console.log('login en LoginPage= ',login)
    console.log('isLogged en LoginPage= ',isLogged)
    const handleLog =  bol => isLogged(true);
    return (
        <div className='loginPage'>
            <h1 className='loginPage-title'>Log in to Twitter</h1>
            <LoginForm onSubmitt= { login } isLoggedd={isLogged} />
        </div>
    );
}

export default LoginPage;