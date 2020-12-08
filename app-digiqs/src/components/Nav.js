import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../styles/nav.css';

const Nav = () => {
    return(
    <div>
        <div className="logo">
            <h1>DigiQs</h1>
            <h2>Inventory Management</h2>
            <br/>
        </div>
        <nav className="nav">
            <ul>
                <li>Dashboard</li>
                <li>Inventario</li>
                <li>Lotes</li>
                <li>Clientes</li>
                <li>Ajustes</li>
                <li>Salir</li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav; 