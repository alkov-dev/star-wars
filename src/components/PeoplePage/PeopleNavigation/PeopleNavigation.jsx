import React from 'react';
import styles from './PeopleNavigation.module.css'
import { Link } from 'react-router-dom';
import UiButton from '../../UI/UiButton/UiButton';



const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    const handleChangeNext = () => getResource(nextPage)
    const handleChangePrev = () => getResource(nextPage)
    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.link}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrev} 
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.link}>
            <UiButton
                    text="Next"
                    onClick={handleChangeNext} 
                    disabled={!nextPage}
                />
            </Link>
        </div>
    );
};

export default PeopleNavigation;