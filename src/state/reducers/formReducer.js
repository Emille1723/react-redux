const initialState = {
	amount : 0,
	transactionType : ''
}

const reducer = (	state = initialState, action) => {
	//desturctured action object
	const {	type, payload } = action;
	switch(type){
		case"NEW_TRANSACTION":
			return state, {
				amount : payload.amount,
				transactionType : payload.transaction
			};
		default:
			return state;
	}

}


export default reducer;