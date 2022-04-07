import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Icon } from '../../assets/twitter-5.svg'
import './Header.css';
import Button from '../shared/Button';
// from outside, we can pass a className to be concatened with classNames(nombre, nombre desde fuera)
const Header = ({ className, ...props }) => {
    return (
        <header className= {classNames('header', className)} {...props}>
            <div className="header-logo">
                <Icon width="32" height="32" />
            </div>
            <nav className='header-nav'>
                <Button to="/tweet" variant="primary" className="header-button">Tweet</Button>
            </nav>
        </header>
    );
};

export default Header;