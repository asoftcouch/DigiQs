
import React, {useEffect, useState} from 'react'; 


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
        { clients.map((item)=> <p key={item._id}> { item.CompanyName } </p> ) }
    </div>
    )
}


export default Clients; 