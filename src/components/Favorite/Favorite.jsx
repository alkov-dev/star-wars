import React, { useState, useEffect } from 'react';
import styles from './Favorite.module.css'
import img from './img/bookmark.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Favorite = () => {
    const [count, setCount] = useState()
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
        setCount(length)
    })

    return (
        <div className={styles.container}>
            <Link to="/favorites" exact>
            <span className={styles.counter}> {count} </span>
            <img 
            className={styles.icon}
            src={img} 
            alt="Favorites" />
            </Link>

        </div>
    );

};


export default Favorite;