import axios from 'axios';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export function singin(userData) {
    return async dispatch => {
        await axios.request({
            url: 'http://localhost:4000/auth/signin',
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            data: userData
        })
            .then(user => {
                debugger
                dispatch({ type: LOGIN_SUCCESS, user })
            })
            .catch(request => {
                dispatch({ type: LOGIN_FAILED, error: request?.response?.data?.error })
            });
    };
}

export function singup(userData) {
    return async dispatch => {
        await axios.request({
            url: 'http://localhost:4000/auth/signup',
            method: 'POST',
            data: userData
        })
            .then(user => {
                debugger
                dispatch({ type: LOGIN_SUCCESS, user })
            })
            .catch(request => {
                dispatch({ type: LOGIN_FAILED, error: request?.response?.data?.error })
            });

    };
}

export function clearError() {
    return ({type: CLEAR_ERROR})
}