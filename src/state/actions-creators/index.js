

export const loadUsers = (users) => {
	return (dispatch) => {
		dispatch({
			type: "LOAD_USERS",
			payload : users
		});
	}
}


export const newTransaction = ( formData ) => {
	return (dispatch) => {
		dispatch({
			type: "NEW_TRANSACTION",
			payload : formData
		});
	}
}



export const depositMoney = ( amount ) => {
	return (dispatch) => {
		dispatch({
			type : "deposit",
			payload : amount
		});
	}
}


export const withdrawMoney = ( amount ) => {
	return (dispatch) => {
		dispatch({
			type : "withdraw",
			payload : amount
		});
	}
}