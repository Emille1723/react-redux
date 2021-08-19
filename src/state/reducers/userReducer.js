const initialState = {
	isSelected : false,
	user : {}
};


const reducer = (state = initialState, action) => {
	// destructured action object
	const {type, payload} = action;
	switch(type){
		case "SELECTED_USER":
			return {...state, isSelected : true, user : payload};
		default:
			return state;
	}

}


export default reducer;