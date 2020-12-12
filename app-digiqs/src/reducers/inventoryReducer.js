import axios from 'axios';

const initState = {
    inventory : []
}


const inventoryReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_INVENTORY": 
            return {...state, inventory: action.payload.inventory}
        default: 
            return {...state}
    }
}



export default inventoryReducer; 