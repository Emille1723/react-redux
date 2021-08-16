const initialState = {
	firstName : "",
	lastName : "",
	amount : "",
	
};


const reducer = (state = initialState, action) => {
	// destructured action object
	const {type, payload} = action;
	switch(type){
		case "SELECTED_USER":
			return {...state, payload};
		default:
			return state;
	}

}


export default reducer;