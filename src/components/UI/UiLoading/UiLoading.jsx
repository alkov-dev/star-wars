import React from 'react';
import { useState, useEffect} from 'react'
import styles from './UiLoading.module.css'
import loader_white from './img/loader_white.svg'
import loader_black from './img/loader_black.svg'
import loader_blue from './img/loader_blue.svg'
import cn from 'classnames'


const UiLoading = ({ theme = "white", isShadow = "true", classes}) => {
    const [loaderIcon, setLoaderIcon] = useState(null)

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(loader_black); break
            case 'white': setLoaderIcon(loader_white); break
            case 'blue': setLoaderIcon(loader_blue); break
            default: setLoaderIcon(loader_white) 
        }   
    }, [])

    return (
        <div>
            <img 
                className={cn(styles.loader_white, isShadow && styles.shadow, classes) } 
                src={loaderIcon} 
                alt="loader" 
            />
        </div>
    );
};

export default UiLoading;