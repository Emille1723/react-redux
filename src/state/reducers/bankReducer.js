
const initialState = {
	amount : 0,
	transaction : ''
};	

// account reducer
// const reducer = ( state = initialState , action ) => {
// 	switch (action.type){
// 		case "deposit":
// 			return { amount : state + action.payload };
// 		case "withdraw":
// 			return { amount : state - action.payload };
// 		default:
// 			return state;
// 	}
// }


const reducer = ( state = initialState , action ) => {
	const { type, payload } = action;
	switch (action.type){
		case "NEW_TRANSACTION":
			return [...state, {
				amount : payload.amount,
				transaction : payload.transaction
			}]
		default:
			return state;
	}
}

export default reducer;