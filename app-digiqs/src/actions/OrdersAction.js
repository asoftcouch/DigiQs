import axios from 'axios';





export const loadOrders = () => async (dispatch) => {
    const ordersData = await axios.get('http://localhost:5000/Orders');
    dispatch({
        type: "FETCH_ORDERS",
        payload: {
            orders: ordersData.data,
        }
    })
}