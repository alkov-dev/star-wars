import { useLocation } from 'react-router-dom';
import React from 'react';
import styles from './NotFoundPage.module.css'
import img from './img/error_404.png'

const NotFoundPage = () => {
    let location = useLocation()
    // location.pathname

    return (
        <div className={styles.container}>
            <img className={styles.img} src={img} alt="Not found" />
            <p className={styles.text}>Not match for <u>{location.pathname}</u></p>
        </div>
    );
};

export default NotFoundPage;