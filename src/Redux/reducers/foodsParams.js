import * as ActionTypes from 'Redux/actions/actionTypes';

const initialState = {
    type: null,
    page: 1,
    limit: 10,
    hasMore: true,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.RESET_FOOD_PARAMS:
            return {
                ...action.payload
            };
        default:
            return state;
    }
};