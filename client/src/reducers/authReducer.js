import { SET_LOGIN_USER } from '../actions/types';
import isEmpty from '../validation/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN_USER:
            // quick question, why can we use ... here?
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}