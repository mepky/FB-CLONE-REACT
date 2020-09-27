import {
    LOGIN_FAILED,
    LOGIN_START,
    LOGIN_SUCESS,
} from '../actions/actionTypes';

const initialAuthState = {
    user: {},
    error: null,
    isLoggedIn: false,
    inProgress: false,
};

export default function auth(state = initialAuthState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                inProgress: true,
            };
        case LOGIN_SUCESS:
            return {
                ...state,
                user: action.user,
                inProgress: false,
                isLoggedIn: true,
                error: null,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                inProgress: true,
                error: action.error,
            };
        default:
            return state;
    }
}