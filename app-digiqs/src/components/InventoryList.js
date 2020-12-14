import React, { useEffect, useState } from 'react';
import InventoryItem from '../components/InventoryItem';
import { Link } from 'react-router-dom'
import axios from 'axios';



const InventoryList = () => {

    // let list = []; 
    const [ itemList, setitemList ] = useState({inventory: []});

    useEffect(() => {

         axios.get('http://localhost:5000/inventario')
        .then((data) => {
            console.log(data.data)
            setitemList({ inventory: data.data });
        })
        .catch(err => console.log(err))
    },[])

    let list; 

    // useEffect( async () => {

    //     const response =  await axios('http://localhost:5000/inventario');

        
    console.log(itemList);
    //     console.log(itemList)
    // });



    return(
        <div>
            {/* //Aqui van todos mis objetos  */}
            {/* <p> { inventoryItems[0].name } </p> */}
            {/* <table>
            { itemList.inventory.map((items) => ( <InventoryItem key={items._id} name={items.name} quantity={items.quantity} />))}
            </table> */}
            {/* <InventoryItem name={"name"} quantity={"quantity"} /> */}
            {/* <inventoryItem name={data.name} quantity={data.quantity} />  */}
        </div>
    )
}

export default InventoryList; 