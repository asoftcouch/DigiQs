import axios from 'axios';


export const dashboardLoad = () => async (dispatch) => {
    const dashboardData = await axios.get('http://localhost:5000/Data/Orders');
    // console.log(inventoryData.data);
    dispatch({
        type: "FETCH_DASHBOARD",
        payload: {
            dashboard: dashboardData.data,
        }
    })
}