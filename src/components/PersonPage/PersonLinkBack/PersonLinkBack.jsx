import styles from './PersonLinkBack.module.css'
import { useNavigate } from "react-router-dom";
import React from 'react';
import icon from './img/arrow-left.svg'

const PersonLinkBack = () => {
    const history = useNavigate()

    const handleGoBack = e => {
        e.preventDefault()
        history(-1)
    }
    return (
        <div>
            <a href="#"  
            onClick={handleGoBack}
            className={styles.link}
            >
                <img className={styles.link__img} src={icon} alt="Go back" />
                <span>Go back</span>
            </a>
        </div>
    );
};

export default PersonLinkBack;
