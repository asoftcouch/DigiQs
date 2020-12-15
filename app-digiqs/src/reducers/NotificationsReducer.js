import axios from 'axios';

const initState = {
    notifications : []
}


const notificationsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_NOTIFICATIONS": 
            return {...state, notifications: action.payload.notifications}
        default: 
            return {...state}
    }
}



export default notificationsReducer; 