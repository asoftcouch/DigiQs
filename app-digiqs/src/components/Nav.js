import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../styles/_nav.scss';

const Nav = () => {
    return(
        <nav className="navigation-bar">
            <ul>
                <li>Dashboard</li>
                <li>Inventario</li>
                <li>Clientes</li>
                <li>Configuraciones</li>
            </ul>
        </nav>
    )
}

export default Nav; 