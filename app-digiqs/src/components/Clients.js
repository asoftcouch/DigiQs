
import React, {useEffect, useState} from 'react'; 

import style from '../styles/clients.css';

import {useDispatch, useSelector} from 'react-redux';
import {loadClients} from '../actions/ClientsActions';
import {motion} from 'framer-motion'
import axios from 'axios';
import {loadNotifications} from '../actions/NotificationActions';

const Clients = () => { 

    const dispatch = useDispatch();


    const [ companyName, setCompanyName ] = useState('');
    const [ rtn, setRtn ] = useState('');
    
    const Animation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.2}}
    }


    useEffect(()=> {
        dispatch( loadClients() );
      }, [dispatch]);
  

      const { clients } = useSelector((state) => state.clients)


      const companyNameHandler =  (e) => {
        setCompanyName(e.target.value);

      }

      const rtnNameHanlder = (e) => {
        setRtn(e.target.value);
      }

      const addClientHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/clients/add', {companyName: companyName, rtn: rtn})
        dispatch( loadClients() );
        dispatch(loadNotifications());
        setCompanyName('');
        setRtn('');

      }

        return (
        <motion.div variants={Animation} initial="hidden" animate="show"> 

            <div>
                <form onSubmit={addClientHandler} className="form-content">
                    <div className="form-inputs">
                    <label htmlFor="">Nombre de la Compañia: </label>
                    <input onChange={companyNameHandler} className="category-input" value={companyName} type="text" name="companyName" id="companyName"/><br/>

                    <label htmlFor="">RTN: </label>
                    <input onChange={rtnNameHanlder} value={rtn} type="number" step="1" name="rtn" id="rtn"/>
                    <br/>
                    <br/>
                    <button className="form-submit"> Agregar Cliente</button>
                    </div>
                </form>
            </div>

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