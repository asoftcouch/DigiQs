import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../styles/nav.css';

const Nav = () => {
    return(
    <div>
        <div className="logo">
            <h1>DigiQs</h1>
            <h2>Inventory & Management</h2>
            <br/>
        </div>
        <br />
        <nav className="nav">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/inventory">Inventario</Link></li>
                <li><Link to="/orders">Lotes</Link></li>
                <li><Link to="/clients">Clientes</Link></li>
                <li><Link to="/settings">Ajustes</Link></li>
                <li><Link to="/exit">Salir</Link></li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav; 