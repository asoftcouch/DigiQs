import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../styles/dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className="Dashboard-Header">
                <h1>Bienvenido a tu Dashboard, 'Insertar nombre'</h1>
            </div>
            <div className="Category-header">
                Numero de Ventas: 
            </div>
            <div className="Category-header">
                Numero de Pedidos esperando aprobacion:
            </div>
            <div className="Category-header">
                Numero de Pedidos cancelados:
            </div>
            <div>
                Pedidos Nuevos: 
            </div>

        </div>
    )
}

export default Dashboard; 