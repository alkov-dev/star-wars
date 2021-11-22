import styles from './PersonPhoto.module.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { addPersonFromFavorite, removePersonFromFavorite } from '../../../store/actions/index'
import favoriteIcon1 from './img/favorite1.svg'
import favoriteIcon2 from './img/favorite2.svg'


const PersonPhoto = ({
    personId,
    personPhoto, 
    personName,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch()

    const dispatchFavoritPeople = () => {
        if (personFavorite) {
            dispatch(removePersonFromFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(addPersonFromFavorite({
                [personId]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setPersonFavorite(true)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
            

                <img 
            onClick={dispatchFavoritPeople}
            src={personFavorite 
                ? favoriteIcon1
                : favoriteIcon2}
            alt="" 
            className={styles.favorite}
            />
            
            
            </div>
            

          
        </>
    );
};

export default PersonPhoto;