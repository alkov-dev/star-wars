import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constants/actionTypes'
import { omit } from 'lodash' 
import { getLocalStorage } from '../../utils/localStorage'
// const state ={
//     1: {
//         name: 'C-3PO',
//         img: ''
//     }
// }
//     2: {
//         name: 'R5-D4',
//         img: ''
//     }
// }

// const initialState = {
//     1: {
//         name: 'C-3PO',
//         img: 'ррррр'
//     }
// }




const initialState = getLocalStorage('store')

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE:
            return  omit(state, [action.payload])
        default: return state

    }
}
export default favoriteReducer