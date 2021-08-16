import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// allows ajax requests on the fly
// import Axios from 'axios';

// this collects/imports all of the actions that have been exported from 'state/index.js' 
import { actionCreators } from './state/index';


import AppWrapper from './components/appWrapper';

function App() {


	// can reference state like this to return all key values
	const state = useSelector( (state) => state.users);
	console.log(state);

	//or return state.reducerName eg. 'state.account' to see that value alone returned
	const form = useSelector( (state) => state.form );
	const bank = useSelector( (state) => state.bank );
	const user = useSelector(	(state) => state.user);
	const users = useSelector(	(state) => state.users );
	console.log('rendered state : ', '\n form => ', form, '\n bank => ', bank, '\n user => ', user, '\n users => ', users);
	const dispatch = useDispatch();

	// can call all of the actionCreators like this
	const ActionCreators = bindActionCreators(actionCreators, dispatch);


	//or can call them in a destructured format
	const {newTransaction, depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);



	

	return (
		<div className="App">
			<AppWrapper/>
		</div>
	);
}

export default App;
