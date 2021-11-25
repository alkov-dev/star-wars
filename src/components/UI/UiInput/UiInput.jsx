import React from 'react';
import styles from './UiInput.module.css'
import icon from './img/cancel.svg'

const UiInput = ({
    value,
    handleInputChange,
    placaholder,
    classes,
}) => {
    return (
        <div className={styles.container}>
            <input 
                type="text" 
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder="Enter name"
                className={styles.input}
            />
            <img 
                onClick={() => value && handleInputChange('')}
                className={styles.clear}
                src={icon} 
                alt="Clear" 
                />
        </div>
    );
};

export default UiInput;