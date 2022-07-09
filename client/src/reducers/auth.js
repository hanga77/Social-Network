import { AUTH, LOGOUT } from '../constants/actionsTypes'

const initiateState= {
    authData: null,
    error: null,
    }

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringily(...action.data));
            return { ...state, authData: action.data};
        case LOGOUT:
            localStorage.clear();
            return { ...state, authData: null};
        case "AUTH_FAIL":
                return { ...state, error: action.data};
        default:
            return state;
    }
}

export default authReducer;