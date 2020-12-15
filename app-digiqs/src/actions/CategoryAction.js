import axios from 'axios';


export const categoriesLoad = () => async (dispatch) => {
    const categoriesData = await axios.get('http://localhost:5000/Categories');
    // console.log(inventoryData.data);
    dispatch({
        type: "FETCH_CATEGORIES",
        payload: {
            categories: categoriesData.data,
        }
    })
}