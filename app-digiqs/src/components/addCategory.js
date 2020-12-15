import React, {useEffect,useState} from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import {categoriesLoad} from '../actions/CategoryAction';
import { motion } from 'framer-motion'

import Style from '../styles/addCategory.css';

const AddCategory = () => {
    const Animation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 0.2}}
    }

    const dispatch = useDispatch();

    const [ category , setCategory ] = useState(''); 
    const [ description, setDescription ] = useState('');


    useEffect(()=> {
      dispatch( categoriesLoad() );
    }, [dispatch]);


    const { categories } = useSelector((state) => state.categories);


    console.log(categories);


    const addCategoryHandler = (e) => {
        setCategory(e.target.value);
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value);
    }

    const addCategory = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/Categories/add' ,{category: category, description: description})
        dispatch(categoriesLoad());
    }

    return (
        <motion.div variants={Animation} animate="show" initial="hidden">
        <form onSubmit={addCategory}>
            <div className="form-content">
                <div className="form-inputs">
                    <label htmlFor="">Nombre de la Categoria: </label><br/>
                    <input onChange={addCategoryHandler} className="category-input" maxLength="20" value={category} type="text"/><br/>
                    <label htmlFor="">Descripcion de la categoria: </label><br/>
                    <textarea onChange={descriptionHandler} className="big-input" value={description} name="" id="" maxLength="40" cols="20" rows="1"></textarea>
                    <br/><br/>
                    <button className="form-submit"> Agregar Categoria </button>
                </div>
            </div>
        </form>
        <br/>
        <table>
            <tbody>
            <tr>
                <th>Nombre </th>
                <th>Descripcion</th>
            </tr>
            {categories.map((item) => <tr key={item._id}><td>{ item.value }</td><td>{ item.description }</td></tr> )}
            </tbody>
        </table>
        </motion.div>
    ); 
}

export default AddCategory;