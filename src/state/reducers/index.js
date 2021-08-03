import { combineReducers } from 'redux';
import bankReducer from './bankReducer';

// this file is used to call of the reducers so that they're referenced from one file

const reducers = combineReducers({
	bank: bankReducer
});

export default reducers;