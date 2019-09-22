import { createStore, combineReducers, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import LoggerMiddleware from 'redux-logger';
import loadingReducer from 'Redux/reducers/loading';
import foodsReducer from 'Redux/reducers/foods';
import foodTypesReducer from 'Redux/reducers/foodTypes';
import currentFoodReducer from 'Redux/reducers/currentFood';
import foodsParamsReducer from 'Redux/reducers/foodsParams';
import errorReducer from 'Redux/reducers/error';

const reducer = combineReducers({
    loading: loadingReducer,
    foods: foodsReducer,
    foodTypes: foodTypesReducer,
    currentFood: currentFoodReducer,
    foodsParams: foodsParamsReducer,
    error: errorReducer,
});

const configureStore = () => {
    return createStore(reducer, applyMiddleware(
        ThunkMiddleware,
    ));
};

export default configureStore;

