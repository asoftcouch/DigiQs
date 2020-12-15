import axios from 'axios';

const initState = {
    dashboard : []
}


const dashboardReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_DASHBOARD": 
            return {...state, dashboard: action.payload.dashboard}
        default: 
            return {...state}
    }
}



export default dashboardReducer; 