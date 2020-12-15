import {combineReducers} from 'redux';
import inventoryReducer from './inventoryReducer';
import clientsReducer from './ClientsReducer';
import ordersReducer from './ordersReducer';
import dashboardReducer from './DashboardReducer'
import notificationsReducer from './NotificationsReducer';
import categoriesReducer from './CategoriesReducer';


const rootReducer = combineReducers({
    inventory: inventoryReducer,
    clients: clientsReducer,
    orders: ordersReducer,
    dashboard: dashboardReducer,
    notifications: notificationsReducer,
    categories: categoriesReducer
})


export default rootReducer; 