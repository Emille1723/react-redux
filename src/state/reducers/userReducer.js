const initialState = {
	user : {}
};


const reducer = (state = initialState, action) => {
	// destructured action object
	const {type, payload} = action;
	switch(type){
		case "SELECTED_USER":
			return {...state, user : payload};
		default:
			return state;
	}

}