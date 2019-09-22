import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = null, action) => {
    switch(action.type) {
        case ActionTypes.SAVE_CURRENT_FOOD:
            return {
                ...action.payload,
            }
        case ActionTypes.RESET_CURRENT_FOOD:
            return null;
        default:
            return state;
    }
};