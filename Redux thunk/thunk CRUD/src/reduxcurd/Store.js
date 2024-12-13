// import { useReducer } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import UserReducer from './UserReducer';
import { thunk } from 'redux-thunk';

const getreducer = combineReducers({
    dataforset: UserReducer
})

const Store = createStore(getreducer, applyMiddleware(thunk))

export default Store;
