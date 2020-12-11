import React from 'react';


const InventoryItem = ({ name, quantity }) => {
    return(
        <div className="Inventory-item">
            <p> Nombre de producto: {name} </p>
            <p> Cantidad de producto: {quantity} </p>
            <p> Precio unitario:      </p>
            <p> Categoria:             </p>
            <br />
        </div>
    )
}


export default InventoryItem; 