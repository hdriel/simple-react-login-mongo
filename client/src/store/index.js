import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { authReducer } from "./reducers";
import {Provider} from "react-redux";
import React from "react";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore( rootReducer, applyMiddleware(ReduxThunk) );

const Store = props => (
    <Provider store={store}>
        {props.children}
    </Provider>
);

export default Store;
