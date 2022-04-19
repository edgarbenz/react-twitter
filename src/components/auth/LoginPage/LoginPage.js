import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../api/auth'
//import './LoginPage.css';

function LoginPage( {handleLogged} ) {
    // const handleLog =  bol => isLogged(true);
    return (
        <div className='loginPage'>
            <h1 className='loginPage-title'>Log in to Twitter</h1>
            <LoginForm onSubmitt= { login } handleLogged= {handleLogged} />
        </div>
    );
}

export default LoginPage;