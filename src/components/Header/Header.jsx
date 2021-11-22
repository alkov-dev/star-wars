import { NavLink  } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'
import Favorite from '../Favorite';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL} from '../../context/ThemeProvider'


import imgDroid from './img/droid.svg'
import imgLightSaber from './img/lightsaber.svg'
import imgSpace from './img/space-station.svg'

const Header = () => {
    const [icon, setIcon] = useState(imgSpace)

    const isTheme = useTheme()


    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLightSaber); break 
            case THEME_DARK: setIcon(imgSpace); break 
            case THEME_NEITRAL: setIcon(imgDroid); break 
            default: setIcon(imgSpace)
        }
    }, [isTheme] )

    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <img className={styles.logo} src={icon} alt="Star Wars" />
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/not-found" exact>Not found</NavLink></li>
                <li><NavLink to="/fail" exact>Fail</NavLink></li>
            </ul>
            <div><Favorite/></div>
        </div>
    );
};

export default Header;
