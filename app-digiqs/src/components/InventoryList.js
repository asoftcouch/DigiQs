import React, { useEffect, useState } from 'react';
import inventoryItem from '../components/InventoryItem';
import { Link } from 'react-router-dom'
import axios from 'axios';



const InventoryList = () => {


    const [ inventoryItems, setInventoryItems ] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/inventario')
        .then((data) => {
            console.log(data.data)
            console.log('has been fetched')
            setInventoryItems(data.data);
            console.log(inventoryItems)
            console.log('This is my name: '+inventoryItems[0].name)
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            {/* //Aqui van todos mis objetos  */}
            <p> { inventoryItems[0].name } </p>
            {/* <inventoryItem name={data.name} quantity={data.quantity} />  */}
        </div>
    )
}

export default InventoryList; 