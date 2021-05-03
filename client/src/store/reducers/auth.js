import { LOGIN_SUCCESS, LOGIN_FAILED, CLEAR_ERROR } from '../actions/auth';

const initialState = {
    user: undefined,
    error: '',
};

const stateManagement = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: '',
                user: action.user,
            };

        case LOGIN_FAILED:
            return {
                ...state,
                error: action.error,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: '',
            };

        default:
             return state;
    }
}

export default stateManagement;
