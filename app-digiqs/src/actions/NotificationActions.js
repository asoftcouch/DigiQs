import axios from 'axios';





export const loadNotifications = () => async (dispatch) => {
    const notificationsData = await axios.get('http://localhost:5000/Notifications');
    // console.log(inventoryData.data);
    dispatch({
        type: "FETCH_NOTIFICATIONS",
        payload: {
            notifications: notificationsData.data,
        }
    })
}