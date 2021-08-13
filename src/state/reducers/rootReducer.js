import { useReducer } from 'react';
import { combineReducers } from 'redux';
import formReducer from './formReducer';
import bankReducer from './bankReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';

// this file is used to call of the reducers so that they're referenced from one file

const rootReducer = combineReducers({
	form : formReducer,
	bank: bankReducer,
	user : userReducer,
	users : usersReducer
});

export default rootReducer;