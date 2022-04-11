import React from 'react';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField'
//import './LoginForm.css';

function LoginForm() {
    const [credenciales, setCredenciales] = React.useState({
        username: '',
        password: ''
    });

    // const handleUsernameChange = evento => {
    // const newCredenciales = {
    //         ...credenciales, // lo que tenga credenciales o se puede poner esto:    password: credenciales.password
    //         username: evento.target.value, // y luego sobreescribe el username con esto
    //     }
    //     setCredenciales(newCredenciales);
    // }
    // const handlePasswordChange = evento => {
    //     const newCredenciales = {
    //         ...credenciales, // lo que tenga credenciales
    //         password: evento.target.value  // y luego sobreescribe el password con esto
    //     }
    //     setCredenciales(newCredenciales);
    // }
    const handleChange =evento => {
        const nombrePropiedad = evento.target.name;
        const newCredenciales = {
            ...credenciales,
            [nombrePropiedad]: evento.target.value
        }
        setCredenciales(newCredenciales);
    }

     return (
        <form className="loginForm">
            <FormField
                type="text"
                name="username"
                label="phone, email or username"
                className="loginForm-field"
                value= {credenciales.username}
                onChange = {handleChange}
            />
            <FormField
                type="password"
                name="password"
                label="password"
                className="loginForm-field"
                value= {credenciales.password}
                onChange = {handleChange}
            />
            <Button type="submit" className="loginForm-submit" variant="primary">
                Log in
            </Button>
        </form>
    );
}

export default LoginForm;