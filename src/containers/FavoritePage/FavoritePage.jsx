import React from 'react';
import styles from './FavoritePage.module.css'
import { useSelector } from 'react-redux';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import { useEffect, useState } from 'react';


const FavoritePage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)
    
    useEffect(() => {
        const arr = Object.entries(storeData)
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    img: item[1].img
                }
            })
            
            setPeople(res)
        }
    }, [])


    return (
        <div>
            <h1 className="header__text">Favorite Page</h1> 
            {people.length
                ?  <PeopleList people={people}/>
                : <h2 className={styles.comment}>No data</h2>
            }
        </div>
    );
};

export default FavoritePage;