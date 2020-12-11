import react from 'react';
import {Link} from 'react-router-dom'; 
import Style from '../styles/createInventory.css'

const CreateInventory = () => {

    return(
        <div>
            <form>
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
                </div>
                <input className="submit-form" type="submit"/>
            </form>
        </div>
    )


}

export default CreateInventory;