export const fetchUsers = (users) => {
	return (dispatch) => {
		// await fetch('http://localhost:5000/people')
		// .then(	response => response.json())
		// .then(users => {
		// 	console.log('users =>', users);
		// 	dispatch({
		// 		type: "FETCHED_USERS",
		// 		payload : users
		// 	});
		// 	}
		// )

		dispatch({
			type: "FETCHED_USERS",
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