import React from 'react';
import styles from './UiButton.module.css'
import cn from 'classnames'

const UiButton = ({text, 
    onClick, 
    disabled,
    classes,
    theme='dark'}) => {
    return (
                    <button 
                        className={cn(styles.btn, styles[theme])}
                        onClick={onClick} 
                        disabled={disabled}
                    >{text}</button>

    );
};

export default UiButton;