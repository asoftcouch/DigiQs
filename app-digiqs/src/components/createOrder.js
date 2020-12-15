import React, {useState, useEffect} from 'react';
import style from '../styles/createOrder.css';
import InventoryPage from '../pages/Inventario';
import OrdersList from './OrdersList';

import { v4 as uuidv4 } from 'uuid'

import {useDispatch, useSelector} from 'react-redux';
import {loadInventory} from '../actions/InventoryAction';


// import Orders from './Orders';


const CreateOrder = () => { 


    const dispatch = useDispatch();

    const [ orderInput, setOrderInput ] = useState(''); 
    const [ orderQuantity, setOrderQuantity ] = useState('');
    const [ orderPrice, setOrderPrice ] = useState('');
    const [ orderDetail, setOrderDetail ] = useState( [] );

    useEffect(()=> {
        dispatch( loadInventory() );
      }, [dispatch]);
    
    const createOrderHandler = async (e) => {
        e.preventDefault();
        // setOrderDetail([...orderDetail, orderInput]);
        setOrderDetail(   [ ...orderDetail, { name: orderInput, quantity: orderQuantity, id: uuidv4() } ] );
    }
    const { inventory } = useSelector((state) => state.inventory);

    const orderInputHandler = (e) => {
        setOrderInput(e.target.value);
    }
    const orderQuantityHandler = (e) => {
        setOrderQuantity(e.target.value);
    }
    const orderPriceHandler = (e) => {
        setOrderPrice(e.target.value);
    }
    return(
        <div>
            <h2> Crear una orden </h2>
            <form onSubmit={createOrderHandler}>
               

                <div className="product-holder-header">

                {/* <input type="text" onChange={orderInputHandler} value={orderInput}/> */}
{/* 
                <input type="number" step="1" onChange={orderQuantityHandler} value={orderQuantity}/>

                <select name="product-list" value={orderInput} onChange={orderInputHandler} id="product-list">
                    {inventory.map((item) => <option key={item._id} value={item.name}> {item.name + " , " +item.price+' Lps.'} </option>)}
                </select>
                <button type="Submit">Agregar</button> */}


                {inventory.map((item)=> 
                    <div key={item._id}>
                        <input type="text" value={orderInput} onChange={orderInputHandler} />
                        <input type="text" value={orderQuantity} onChange={orderQuantityHandler}/>
                        <input type="number" value={orderPrice} onChange={orderPriceHandler} />
                    </div>

                )}
                <OrdersList orderDetails={orderDetail} setOrderDetail={setOrderDetail} />

                
                </div>

                
            </form>

        </div>
    )
}

export default CreateOrder;