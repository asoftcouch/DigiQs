import React, {useState, useEffect} from 'react';
import style from '../styles/createOrder.css';
import InventoryPage from '../pages/Inventario';


import {useDispatch, useSelector} from 'react-redux';
import {loadInventory} from '../actions/InventoryAction';



const CreateOrder = () => { 

    const dispatch = useDispatch();

    const [ orderInput, setOrderInput ] = useState(''); 
    const [ orderDetail, setOrderDetail ] = useState([]);

    useEffect(()=> {
        dispatch( loadInventory() );
      }, [dispatch]);
  

    
    const createOrderHandler = async (e) => {
        e.preventDefault();
        setOrderDetail([...orderDetail, orderDetail])
    }

    const { inventory } = useSelector((state) => state.inventory);

    let newOrderArray = [{}]; 

    inventory.map((item) => newOrderArray.push({product: item.name, price: item.price}))


    const getProductValue = (e) => {
        e.preventDefault();

        // const checkboxes = document.getElementsByName("products");
        // const selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked==true).map((item)=> setOrderDetail(...orderDetail  [ item.defaultValue]));
    }
    console.log(orderDetail);

    return(
        <div>
            <h2> Crear una orden </h2>
            <form onSubmit={createOrderHandler}>
                <label htmlFor="">Producto</label>
                <input type="text"/>
                <input type="submit"/>   
            </form>
        </div>
    )
}

export default CreateOrder;