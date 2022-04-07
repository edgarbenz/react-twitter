import React from 'react';

import Header from './Header'
import './Layout.css';

function Layout ( {children, title, ...props} ) {
    return (
        <div className="Layout">
            <Header className="layout-header bordered" {...props}></Header>
            <main className='layout-main bordered'>
                <h2 className='layout-title bordered'>{title}</h2>
                <section className='layout-content'>{children}</section>
            </main>
            <footer className='layout-footer bordered'>All right reserved</footer>
        </div>
    );
}

export default Layout;