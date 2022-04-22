import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../../api/auth'
//import './LoginPage.css';

function LoginPage( {handleSetIsLogged} ) {
    // const handleLog =  bol => isLogged(true);
    const [error,setError] = React.useState( null );
    const handleSetError = (error) => { setError(error) };

    const resetError = () => setError(null);

    return (
        <div className='loginPage'>
            <h1 className='loginPage-title'>Log in to Twitter</h1>
            <LoginForm login= { login } handleSetIsLogged= {handleSetIsLogged} handleSetError= {handleSetError}/>
            {error && <div onClick={resetError} className="loginPage-error">Error de autenticacion: {error.message}</div>}
        </div>
    );
}

export default LoginPage;