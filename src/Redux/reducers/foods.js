import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.SAVE_FOODS:
            return [...action.payload];
        case ActionTypes.RESET_FOODS:
            return [];
        case ActionTypes.APPEND_FOODS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};