import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'; 

import {useDispatch, useSelector} from 'react-redux';
import {loadInventory} from '../actions/InventoryAction';

import InventoryItem from '../components/InventoryItem';


import Style from '../styles/itemStyle.css';


const Inventario = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch( loadInventory() );
    }, [dispatch]);

    const { inventory } = useSelector((state) => state.inventory)
  
    return (
        <div>
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
            { inventory.map((item) => <InventoryItem key={item._id} name={item.name} quantity={item.quantity} price={item.price} category={item.category}/> ) }
                </tbody>
            </table>
        </div>
    )
}

export default Inventario; 