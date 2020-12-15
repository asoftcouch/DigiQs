
import React, {useEffect, useState} from 'react'; 

import style from '../styles/clients.css';

import {useDispatch, useSelector} from 'react-redux';
import {loadClients} from '../actions/ClientsActions';
import {motion} from 'framer-motion'


const Clients = () => { 

    const dispatch = useDispatch();

    
    const Animation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.2}}
    }


    useEffect(()=> {
        dispatch( loadClients() );
      }, [dispatch]);
  
      const { clients } = useSelector((state) => state.clients)

        return (
        <motion.div variants={Animation} initial="hidden" animate="show"> 
            <div>
                <h2>Lista de Clientes</h2>
            </div>   

            <div className="clientList">
                { clients.map((item)=> <div className="client" key={item._id}>
                    <div className="client-content">
                        <h2> Nombre:  { item.CompanyName } </h2>
                        <h2> Rtn: {item.Rtn } </h2> 
                        <h2> Agregado: {item.added} </h2>
                    </div>
                    </div> 
                )}
            </div>
        </motion.div>
    )
}


export default Clients; 