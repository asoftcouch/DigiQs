import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'; 
import style from '../styles/dashboard.css';

import {dashboardLoad} from '../actions/DashboardAction';

const Dashboard = () => {



    const dispatch = useDispatch(); 


    useEffect(()=> {
        dispatch( dashboardLoad() );
      }, [dispatch]);

      const { dashboard } = useSelector((state) => state.dashboard);

      console.log(dashboard);
  
    return (
        <div className="Dashboard-container">
            <div className="Dashboard-Header">
                <br/>
                <h1>Bienvenido a tu Dashboard</h1>
            </div>
            <div className="Category-header">
                Numero de Ventas aprovadas: {dashboard.approved} 
            </div>
            <div className="Category-header">
                Numero de Pedidos esperando aprobacion: {dashboard.pending} 
            </div>
            <div className="Category-header">
                Numero de Pedidos cancelados: {dashboard.declined} 
            </div>

        </div>
    )
}

export default Dashboard; 