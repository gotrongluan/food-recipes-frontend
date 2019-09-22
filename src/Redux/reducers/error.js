import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {}, action) => {
    switch(action.type) {
        case ActionTypes.SAVE_ERROR:
            return {
                ...state,
                [action.payload.type]: action.payload.errorCode,
            };
        default:
            return state;
    }
};