import { createStore } from 'redux';
import reducers from './reducers/index';


// instaniating the store
// by default the store will only contain a reference to the reducers and an empty object

export const store = createStore(
	reducers, 
	{}
)