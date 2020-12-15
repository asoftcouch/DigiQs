import React,{ useEffect }  from 'react';
import {Link} from 'react-router-dom'; 
import Style from '../styles/notibar.css';
import NotiMessages from './NotiMessages';


import {useDispatch, useSelector} from 'react-redux';
import { loadNotifications } from '../actions/NotificationActions';



const Notibar = () => {


    const dispatch = useDispatch();

    useEffect(()=> {
      dispatch( loadNotifications() );
    }, [dispatch]);

    const { notifications } = useSelector((state) => state.notifications);



    return(
        <div className="Notifications">

                <br/>
                <h2 className="Notifiicaciones">Notificaciones: </h2>


                <div className="Notification-messages">
                    
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />
                    <NotiMessages />



            </div>
        </div>
    )
}


export default Notibar;