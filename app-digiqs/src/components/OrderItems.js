import React from 'react';


const OrderItems = ({name, price}) => {


    let quantity = 1;
    

    return(
        <div className="product-holder">
            <p className='product-name'>{name}</p>
            <p className='product-price'> {price}</p>
            <p className='product-quantity'>quantity</p>
            <p className='product-total'>total</p>
        </div>
    ) 
}

export default OrderItems;