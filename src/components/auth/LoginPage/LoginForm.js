import React from 'react';
import Button from '../../shared/Button';
import FormField from '../../shared/FormField'
import classNames from 'classnames';

//import './LoginForm.css';

function LoginForm( {onSubmitt, handleLogged} ) {
    const [credenciales, setCredenciales] = React.useState({ username: '', password: '' });

    const handleChange = evento => {
        const nombrePropiedad = evento.target.name;
        setCredenciales( (oldCredenciales) => { // el primer parametro de esta funcion de seteo lo equipa con los datos que tenga en credenciales en el React.setState()
            const newCredenciales = {
                ...oldCredenciales,
                [nombrePropiedad]: evento.target.value
            }
            return newCredenciales;
        });
    }
    const handleSubmit = (evento) => { // esta funcion del manejador onSubmit de form de javascript, manda un parametro evento que contiene los datos que esta enviando el formulario
        evento.preventDefault();
        
        const accessToken = onSubmitt(credenciales).then( () => {
            console.log('accessToken en LoginForm = ',accessToken)
            window.localStorage.setItem('logged',true)
            handleLogged(true);

        }).catch( (error)=> { 
            console.log('Hubo un error de autenticacion, ',error); 
            window.localStorage.setItem('logged',false)
            handleLogged(false);
        });
        
    }

     return (
        <form className="loginForm" onSubmit={handleSubmit}>
            <FormField
                type="text"
                name="username"
                label="phone, email or username"
                className= {classNames('loginForm-field', {
                    empty: !credenciales.username,
                })}
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
            <Button type="submit" className="loginForm-submit" variant="primary" 
                    disabled={!credenciales.username || !credenciales.password}>
                Log in
            </Button>
        </form>
    );
}

export default LoginForm;

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
    // const handleChange =evento => {
    //     const nombrePropiedad = evento.target.name;
    //     const newCredenciales = {
    //         ...credenciales,
    //         [nombrePropiedad]: evento.target.value
    //     }
    //     setCredenciales(newCredenciales);
    // }