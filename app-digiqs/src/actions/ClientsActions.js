import axios from 'axios';





export const loadClients = () => async (dispatch) => {
    const clientsData = await axios.get('http://localhost:5000/Clients');
    // console.log(inventoryData.data);
    dispatch({
        type: "FETCH_CLIENTS",
        payload: {
            clients: clientsData.data,
        }
    })
}