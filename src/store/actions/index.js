import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTypes'

export const addPersonFromFavorite = (personInfo) => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: personInfo
})

export const removePersonFromFavorite = (personId) => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
})