import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk}  from "redux-thunk";
import { userReducer } from './reducers/userReducer';
import { adminReducer } from './reducers/adminReducer';

const rootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
