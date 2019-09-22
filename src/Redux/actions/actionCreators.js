import * as ActionTypes from './actionTypes';
import FOODS from 'Assets/Faker/foods';
import FOOD_TYPES from 'Assets/Faker/foodTypes';

export const saveLoading = (loadingType, value) => ({
    type: ActionTypes.SAVE_LOADING,
    payload: {
        loadingType,
        value,
    },
});

export const saveFoods = foods => ({
    type: ActionTypes.SAVE_FOODS,
    payload: foods,
});

export const resetFoodParams = (type, hasMore) => ({
    type: ActionTypes.RESET_FOOD_PARAMS,
    payload: {
        type,
        page: 1,
        limit: 10,
        hasMore,
    }
});

export const resetFoods = () => ({
    type: ActionTypes.RESET_FOODS,
});

export const appendFoods = foods => ({
    type: ActionTypes.APPEND_FOODS,
    payload: foods,
});

export const saveFoodTypes = foodTypes => ({
    type: ActionTypes.SAVE_FOOD_TYPES,
    payload: foodTypes,
})

export const saveError = (type, errorCode) => ({
    type: ActionTypes.SAVE_ERROR,
    payload: {
        type,
        errorCode,
    }
});

export const saveCurrentFood = food => ({
    type: ActionTypes.SAVE_CURRENT_FOOD,
    payload: food,
});

export const resetCurrentFood = () => ({
    type: ActionTypes.RESET_CURRENT_FOOD,
});

export const fetchFoods = type => (dispatch) => {
    dispatch(saveLoading('fetchFoods', true));
    dispatch(resetFoods());
    setTimeout(() => {
        if (type.split('-').length > 1) {
            dispatch(saveError('fetchFoods', 404));
        }
        else {
            dispatch(saveFoods(FOODS));
            dispatch(resetFoodParams({
                key: type,
                name: type.toUpperCase(),
            }, true));
        }
        dispatch(saveLoading('fetchFoods', false));
    }, 2500);
};

export const scrollFoods = () => (dispatch) => {
    dispatch(saveLoading('scrollFoods', true));
    setTimeout(() => {
        dispatch(appendFoods(FOODS));
        dispatch(saveLoading('scrollFoods', false));
    }, 2000);
}

export const fetchFoodTypes = () => (dispatch) => {
    dispatch(saveLoading('fetchFoodTypes', true));
    setTimeout(() => {
        dispatch(saveFoodTypes(FOOD_TYPES));
        dispatch(saveLoading('fetchFoodTypes', false))
    }, 1300);
}

export const fetchCurrentFood = (foodId) => (dispatch, getState) => {
    dispatch(saveLoading('fetchCurrentFood', true));
    const { foods } = getState();
    const food = foods.filter(f => f.id.toString() === foodId)[0] || null;
    if (food) {
        dispatch(saveCurrentFood(food));
        dispatch(saveLoading('fetchCurrentFood', false));
    }
    else {
        setTimeout(() => {
            if (foodId < 10) {
                dispatch(saveCurrentFood({
                    id: 1,
                    name: 'Sườn xào chua ngọt',
                    avatar: 'https://media.cooky.vn/recipe/g1/9151/s800x500/cooky-recipe-cover-r9151.jpg',
                    ingredients: [{
                        name: 'oil',
                        unit: 'mg',
                        amount: '50'
                    }],
                    steps: 'abcdef',
                    createdAt: 1567476439584
                }));
            }
            else {
                dispatch(saveError('fetchCurrentFood', 404));
            }
            dispatch(saveLoading('fetchCurrentFood', false));
        }, 2000);
    }
}