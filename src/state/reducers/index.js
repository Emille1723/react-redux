import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

// this file is used to call of the reducers so that they're referenced from one file

const reducers = combineReducers({
	account: accountReducer
});

export default reducers;