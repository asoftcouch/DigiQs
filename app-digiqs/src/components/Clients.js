
import React, {useEffect, useState} from 'react'; 

import style from '../styles/clients.css';

import {useDispatch, useSelector} from 'react-redux';
import {loadClients} from '../actions/ClientsActions';



const Clients = () => { 

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch( loadClients() );
      }, [dispatch]);
  
      const { clients } = useSelector((state) => state.clients)

        return (
        <div> 
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
        </div>
    )
}


export default Clients; 