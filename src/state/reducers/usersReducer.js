const intialState = {
	users : []
};


const reducer = ( state = intialState , action) => {
	switch (action.type){
		case "FETCH_USERS":
			return { 
				...state,
				data: action.payload	
			}
		default:
			return state;
	}
};


export default reducer;

