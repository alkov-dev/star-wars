import PropTypes from 'prop-types';
import React from 'react';
import styles from './People.module.css'
import { Link } from 'react-router-dom'
import PersonPage from '../../../containers/PersonPage';


const PeopleList = ({ people }) => {
     
 <PersonPage people={people}/>

    return (
        <div className={styles.container}>
            <ul className={styles.list__container}>
               {people.map(({id, name, img}) => 
                   <li className={styles.list__item} key={id}>
                       <Link to={`/people/${id}`}>
                            <img className={styles.person__photo} src={img} alt={name} />
                            <p>{name}</p>
                       </Link>
                    </li>
                )}
            </ul>

        </div>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;