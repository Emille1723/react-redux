
const initialState = {
	amount : 0
};	

// account reducer
const reducer = ( state = initialState , action ) => {
	switch (action.type){
		case "deposit":
			return { amount : state + action.payload };
		case "withdraw":
			return { amount : state - action.payload };
		default:
			return state;
	}
}

export default reducer;