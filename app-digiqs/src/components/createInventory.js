import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 
import Style from '../styles/createInventory.css'
import axios from 'axios';



import {useDispatch, useSelector} from 'react-redux';
import {loadInventory} from '../actions/InventoryAction';


const CreateInventory = () => {


    const inventory = useSelector ((state) => state.inventory); 
    const dispatch = useDispatch(); 

    // const [ newList , setNewList] = useState({name: '', quantity: '', price: '', category: ''});
    
    const submitListHandler = async (e) => {
        e.preventDefault(); 
            const name =  document.getElementById('name').value;
            const quantity = document.getElementById('quantity').value;
            const price = document.getElementById('price').value;
            const category =  document.getElementById('category').value;
            await sendData(name, quantity, price, category).then(console.log(inventory));
            document.getElementById('name').value = '';
            document.getElementById('quantity').value = '';
            document.getElementById('price').value ='';
            document.getElementById('category').value='';

    }



    async function sendData(name, quantity, price, category) {
       const response = (await axios.post('http://localhost:5000/inventario/add', {name: name, quantity: quantity, price: price, category: category}))
       dispatch(loadInventory());

    }
    
    return(
        <div>
            <form onSubmit={submitListHandler}>
                <h2 className="title-header">Agrega un nuevo articulo: </h2>
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