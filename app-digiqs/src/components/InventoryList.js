import React, { useEffect, useState } from 'react';
import inventoryItem from '../components/InventoryItem';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';


const InventoryList = () => {
    const name = "example";
    const quantity = 2; 

    return(
        <div>
            {/* //Aqui van todos mis objetos  */}
            <inventoryItem name={name} quantity={quantity} /> 
        </div>
    )
}

export default IntentoryList; 