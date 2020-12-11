import React, { useEffect, useState } from 'react';
import InventoryItem from '../components/InventoryItem';
import { Link } from 'react-router-dom'
import axios from 'axios';



const InventoryList = () => {

    let list = []; 
    const [ inventoryItems, setInventoryItems ] = useState('null');

    useEffect(() => {

      axios.get('http://localhost:5000/inventario')
        .then((data) => {
            console.log(data.data)
            console.log('has been fetched')
            console.log(inventoryItems);
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            {/* //Aqui van todos mis objetos  */}
            {/* <p> { inventoryItems[0].name } </p> */}
            {/* { inventoryItems.map((items) => ( <InventoryItem name={items.name} quantity={items.quantity} /> ))} */}
            {   list.map((item) =>  < InventoryItem name={item} quantity={item} /> ) }
            <InventoryItem name={"name"} quantity={"quantity"} />
            {/* <inventoryItem name={data.name} quantity={data.quantity} />  */}
        </div>
    )
}

export default InventoryList; 