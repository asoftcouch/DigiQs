import axios from 'axios';

const initState = {
    clients : []
}


const clientsReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_CLIENTS": 
            return {...state, clients: action.payload.clients}
        default: 
            return {...state}
    }
}



export default clientsReducer; 