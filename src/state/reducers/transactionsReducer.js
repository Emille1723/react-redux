const initialState = {
	transactions : []
};


const reducer = ( state = initialState, action ) => {
	// destructured action object
	const { type, payload } = action;
	switch(type){
		case"FETCHED_TRANSACTIONS":
			return {...state, transactions : payload};
		default:
			return state;
	}
};


export default reducer;