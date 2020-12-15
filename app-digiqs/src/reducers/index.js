import {combineReducers} from 'redux';
import inventoryReducer from './inventoryReducer';
import clientsReducer from './ClientsReducer';
import ordersReducer from './ordersReducer';
import dashboardReducer from './DashboardReducer'
import notificationsReducer from './NotificationsReducer';

const rootReducer = combineReducers({
    inventory: inventoryReducer,
    clients: clientsReducer,
    orders: ordersReducer,
    dashboard: dashboardReducer,
    notifications: notificationsReducer
})


export default rootReducer; 