import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.SAVE_FOOD_TYPES:
            return [...action.payload];
        default:
            return state;
    }
};