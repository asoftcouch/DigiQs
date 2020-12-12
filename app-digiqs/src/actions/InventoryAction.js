import axios from 'axios';





export const loadInventory = () => async (dispatch) => {

    const inventoryData = await axios.get('http://localhost:5000/inventario');

    console.log(inventoryData.data);

    dispatch({
        type: "FETCH_INVENTORY",
        payload: {
            inventory: inventoryData,
        }
    })
}