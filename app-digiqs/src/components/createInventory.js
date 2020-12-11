import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 
import Style from '../styles/createInventory.css'
import axios from 'axios';

const CreateInventory = () => {

    const [ newList , setNewList] = useState({name: '', quantity: '', price: '', category: ''});
    
    const submitListHandler = async (e) => {
        e.preventDefault(); 
             setNewList( {   
                        name: document.getElementById('name').value,
                        quantity: document.getElementById('quantity').value,
                        price: document.getElementById('price').value,
                        category: document.getElementById('category').value 
                        },
                        sendData());   
    }

    const sendData = () => {
        axios.post('http://localhost:5000/inventario/add',{name: newList.name, quantity: newList.quantity})
        .then((response) => console.log(response))
        .catch((error)=>console.log(error))
    }
    
    return(
        <div>
            <form onSubmit={submitListHandler}>
                <h3>Agrega un nuevo articulo: </h3>
                <div className="createInventory-form">
                    <div className="form-input">
                        <label htmlFor="product-name">Nombre de Producto: </label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="product-quantity">Cantidad para inventario: </label>
                        <input type="text" name="quantity" id="quantity"/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="product-price">Precio unitario: </label>
                        <input type="text" name="price" id="price"/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="product-price">Categoria: </label>
                        <input type="text" name="category" id="category"/>
                    </div>
                </div>
                <div className="form-input-submit">
                    <input className="submit-form" type="submit" value="Agregar nuevo item"/>
                </div>
            </form>
        </div>
    )


}

export default CreateInventory;