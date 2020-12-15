import axios from 'axios';

const initState = {
    categories : []
}


const categoriesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_CATEGORIES": 
            return {...state, categories: action.payload.categories}
        default: 
            return {...state}
    }
}



export default categoriesReducer; 