import React from 'react';
import {Link} from 'react-router-dom'; 
import Style from '../styles/notibar.css';


const NotiMessages = ({type, description}) => {
    return(


                <div className="Message">
                    <div className="message-element">
                        <p>{type}</p>
                    </div>
                    <div className="message-text">
                        <p>{description}</p> 
                </div>
   
        </div>

    )
}


export default NotiMessages;