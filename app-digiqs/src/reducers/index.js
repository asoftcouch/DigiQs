import {combineReducers} from 'redux';
import inventoryReducer from './inventoryReducer';
import clientsReducer from './ClientsReducer';


const rootReducer = combineReducers({
    inventory: inventoryReducer,
    clients: clientsReducer
})


export default rootReducer; 