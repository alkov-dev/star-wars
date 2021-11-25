import React from 'react';
import styles from './SearchPageInfo.module.css'
import { Link } from 'react-router-dom'

const SearchPageInfo = ({people}) => {
    // console.log(people.lengh)
    return (
        <div>
            {people.length 
                ? ( <ul className={styles.container}>
                    {people.map(( { id, name, img} ) => 
                        <li key={id} className={styles.item}>
                            <div>
                                <Link to={`/people/${id}`}>
                                      <img className={styles.img} src={img} alt={name} />
                                </Link>
                                <p className={styles.name}>{name}</p>
                            </div>

                        </li>
                    )}
                </ul> )
                : <h2>No results</h2>
            }

        </div>
    );
};

export default SearchPageInfo;