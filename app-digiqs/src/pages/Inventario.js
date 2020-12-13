import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'; 

import {useDispatch, useSelector} from 'react-redux';
import {loadInventory} from '../actions/InventoryAction';

import InventoryItem from '../components/InventoryItem';


const Inventario = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch( loadInventory() );
    }, [dispatch]);

    const { inventory } = useSelector((state) => state.inventory)
  
    return (
        <div>
            <h2>Inventario</h2>

            { inventory.map((item) => <InventoryItem key={item._id} name={item.name} /> ) }
        </div>
    )
}

export default Inventario; 