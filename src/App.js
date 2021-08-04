import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

// this collects/imports all of the actions that have been exported from 'state/index.js' 
import { actionCreators } from './state/index';


import AppWrapper from './components/appWrapper';

function App() {

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

	console.log(bank);

	return (
		<div className="App">
			<AppWrapper />
		</div>
	);
}

export default App;
