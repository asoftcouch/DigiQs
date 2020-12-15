
import React, {useEffect, useState} from 'react'; 
import Style from '../styles/orders.css';
import { v4 as uuidv4 } from 'uuid'
import {useDispatch, useSelector} from 'react-redux';
import {loadOrders} from '../actions/OrdersAction';
import { motion } from 'framer-motion'


const Orders = () => { 



    const Animation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.2}}
    }

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch( loadOrders() );
      }, [dispatch]);
  
      const { orders } = useSelector((state) => state.orders);

      orders.map((item) => item.details.map((element) => console.log(element)))

    return (

    <motion.div variants={Animation} animate="show" initial="hidden">
        { orders.map((item)=> 
        <div key={item._id} className="order-listing">
            <div className='master'>
                <div className='master-content'>
                    <h3>Codigo: {item._id}</h3>
                    <h3>Cliente: {item.cliente_id}</h3>
                    <h3>Status: {item.status}</h3>
                </div>
            </div>
            <div className="detail">
            {item.details.map((element)=> 
            <div key={element._id} className="individual-detail" style={{color: 'black'}}>
                <p>producto: {element.product}</p>
                <p>precio: {element.price}</p>
                <p>cantidad: {element.quantity}</p>
                <p>categoria: {element.category} </p>
                </div>)}
            </div>

            <div className="total" style={{color: 'white', marginLeft: '3%'}}>
                <p className="total-bill">{'Total'}</p>
            </div>

        </div> )}
    </motion.div>

    )
}


export default Orders; 