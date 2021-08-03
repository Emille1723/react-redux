import './App.css';
import { useSelector } from 'react-redux';

function App() {

	// can reference state like this to return all key values
	// const state = useSelector( (state) => state);
	// console.log(state);

	//or return state.reducerName eg. 'state.account' to see that value alone returned
	const account = useSelector( (state) => state.account);

	console.log(account);

	return (
		<div className="App">
			
		</div>
	);
}

export default App;
