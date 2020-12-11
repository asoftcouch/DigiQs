import React, { useEffect, useState } from 'react';
import InventoryItem from '../components/InventoryItem';
import { Link } from 'react-router-dom'
import axios from 'axios';



const InventoryList = () => {

    const [ inventoryItems, setInventoryItems ] = useState('');


    useEffect(() => {
        axios.get('http://localhost:5000/inventario')
        .then((data) => {
            console.log(data.data)
            console.log('has been fetched')
            setInventoryItems({ ...data } );
            console.log(inventoryItems);
            

            inventoryItems.map((items) => console.log(items.name) );
            // setInventoryItems( );


        })
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            {/* //Aqui van todos mis objetos  */}
            {/* <p> { inventoryItems[0].name } </p> */}
            {/* { inventoryItems.map((items) => ( <InventoryItem name={items} quantity={items} /> ))} */}
            {/* <inventoryItem name={data.name} quantity={data.quantity} />  */}
        </div>
    )
}

export default InventoryList; 