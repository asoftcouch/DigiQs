import React from 'react';
import Style from '../styles/itemStyle.css';



const InventoryItem = ({ name, quantity, price, category, action, actionName }) => {
    return(
        <tr className="Inventory-item">
            <td className='name'> {name} </td>
            <td className='quantity'>{quantity} </td>
            <td className='unit-price'> {price} </td>
            <td className='category'> {category} </td>
            {/* //<td className='actions'> {actionName} </td> */}
        </tr>
    )
}


export default InventoryItem; 