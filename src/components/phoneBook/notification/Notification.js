import React from 'react'
import Styles from './Notification.module.css'

const Notification = ({ name }) => {
    return (
        <div className={Styles.NotificationWrapper}>
            {`${name} is already in Contacts`}
        </div>
    );
}

export default Notification;