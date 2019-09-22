import * as ActionTypes from 'Redux/actions/actionTypes';

export default (state = {}, { type, payload }) => {
    switch(type) {
        case ActionTypes.SAVE_LOADING:
            return {
                ...state,
                [payload.loadingType]: payload.value,
            }
        default:
            return state;
    }
};