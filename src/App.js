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

	


	const fetchUsers = async () => {
		// fetch('https://reqres.in/api/unknown')
		// .then(res => res.json())
		// .then(data => console.log(data.data));

		const res = await fetch('https://reqres.in/api/unknown')
		const data = await res.json()
		console.log(data.data)
	}


	// can reference state like this to return all key values
	// const state = useSelector( (state) => state);
	// console.log(state);

	//or return state.reducerName eg. 'state.account' to see that value alone returned
	const bank = useSelector( (state) => state.bank );
	const dispatch = useDispatch();

	// can call all of the actionCreators like this
	const ActionCreators = bindActionCreators(actionCreators, dispatch);

	//or can call them in a destructured format
	const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
	
	console.log(ActionCreators);

	console.log(`Amount => ${bank.amount}`);

	const state = useSelector(	(state) => state );

	console.log('state', state);

	return (
		<div className="App">

			<AppWrapper />
		</div>
	);
}

export default App;
