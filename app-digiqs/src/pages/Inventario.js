import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'; 

import {useDispatch, useSelector} from 'react-redux';
import {loadInventory} from '../actions/InventoryAction';

import InventoryItem from '../components/InventoryItem';


import Style from '../styles/itemStyle.css';

import { motion } from 'framer-motion'

const Inventario = ({ action, actionName }) => {
    const dispatch = useDispatch();


    const Animation = {
        hidden: {y: 100},
        show: {y: 0, transition: {duration: 0.3, ease: 'easeIn'}}
    }

    useEffect(()=> {
      dispatch( loadInventory() );
    }, [dispatch]);

    const { inventory } = useSelector((state) => state.inventory);
  
    return (
        <motion.div variants={Animation} initial="hidden" animate="show" className="inventory-board"> 
            <br/>
            <h2 className="title-name">Lista de Inventario</h2>
            <table>
                <tbody>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio por Unidad</th>
                    <th>Categoria</th>
                </tr>
            { inventory.map((item) => <InventoryItem actionName={actionName} action={action} key={item._id} name={item.name} quantity={item.quantity} price={item.price} category={item.category}/> ) }
                </tbody>
            </table>
        </motion.div>
    )
}

export default Inventario; 