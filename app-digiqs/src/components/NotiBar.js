import React from 'react';
import {Link} from 'react-router-dom'; 
import style from '../styles/nav.css';


const Notibar = () => {
    return(
        <div>
            <div className="Notifications">
                <div className="Notification-messages">
                    
                    <div className="Message">
                        <div className="message-element">
                            <p>Nuevo:</p>
                        </div>
                        <div className="message-text">
                            <p>orden #1717 ha sido aprobada</p>
                        </div>
                    </div>

                    <div className="Message">
                        <div className="message-element">
                            <p>Nuevo:</p>
                        </div>
                        <div className="message-text">
                            <p>orden #1717 ha sido aprobada</p>
                        </div>
                    </div>
                    
                    <div className="Message">
                        <div className="message-element">
                            <p>Nuevo:</p>
                        </div>
                        <div className="message-text">
                            <p>orden #1717 ha sido aprobada</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Notibar;