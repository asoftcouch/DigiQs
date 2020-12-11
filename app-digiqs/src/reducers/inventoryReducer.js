const initState = {
    inventory : []
}


const inventoryReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_INVENTORY": 
            return {...state}
        default: 
            return {...state}
    }
}

export default inventoryReducer; 