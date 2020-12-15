import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'; 
import style from '../styles/dashboard.css';
import Wave from '../components/waveMotion';
import { motion } from 'framer-motion'
import {dashboardLoad} from '../actions/DashboardAction';

const Dashboard = () => {



    const dispatch = useDispatch(); 


    useEffect(()=> {
        dispatch( dashboardLoad() );
      }, [dispatch]);

      const { dashboard } = useSelector((state) => state.dashboard);

      console.log(dashboard);


      const Animation = {
          hidden: {y: 100},
          show: {y: 0, transition: {duration: 1, ease: 'easeOut'}}
      }
    //   const titleAnimation = {
    //       hidden: {opacity: 0},
    //       show : {opacity: 1, transition: {duration: 5, staggerChildren: 0.25, when: 'afterChildren'}}
    //   }
  
    return (
        <motion.div variants={Animation} initial="hidden" animate="show" className="Dashboard-container">
            <div className="Dashboard-inset">
                <div className="Dashboard-Header">
                    <br/>
                    <h1 >Bienvenido a tu Dashboard, Bernardo Avila</h1>
                    <br />
                </div>
                <div className="Category-container">
                    <div className="Category-header" id="pending">
                        <p className="sub-header">Informacion acerca de las ordenes: </p> 
                    </div>
                    <div className="Category-header" id="approved">
                        <p> Numero de Ordenes Generales:</p>
                        <p> {dashboard.approved + dashboard.declined + dashboard.pending} </p>
                    </div>
                    <div className="Category-header" id="approved">
                        <p>Numero de Ventas aprobadas:</p>
                        <p> {dashboard.approved} </p>
                    </div>
                    <div className="Category-header" id="pending">
                        <p>Numero de Pedidos esperando aprobacion: </p> 
                        <p>{dashboard.pending}</p>
                    </div>
                    <div className="Category-header" id="declined">
                        <p>Numero de Pedidos cancelados: </p>
                        <p>{dashboard.declined}</p>
                    </div>
                    <div className="Category-header" id="pending">
                        <p class="sub-header">Base de Datos DigiQs: </p> 
                    </div>
                    <div className="Category-header" id="declined">
                        <p>Numero de Clientes en la plataforma: </p>
                        <p>{dashboard.clients}</p>
                    </div>
                    <div className="Category-header" id="declined">
                        <p>Numero de objetos en nuestro inventario: </p>
                        <p>{dashboard.inventory}</p>
                    </div>
                    <div className="Category-header" id="declined">
                        <p>Objetos en inventario vendidos en este mes: </p>
                        <p>{dashboard.inventory}</p>
                    </div>

                </div>
            </div>

        </motion.div>
    )
}

export default Dashboard; 