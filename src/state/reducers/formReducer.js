const initialState = {
	formData : {
		amount : 0,
		transactionType : ''
	}
}

const reducer = (	state = initialState, action) => {
	//desturctured action object
	const {	type, payload } = action;
	switch(type){
		case"NEW_TRANSACTION":
			// return state, {
			// 	amount : payload.amount,
			// 	transactionType : payload.transaction
			// };

			// return {...state, formData : {...state.formData, payload}};

			return {...state, formData : {...state.formData, payload }};
		default:
			return state;
	}

}


export default reducer;