

export const loadUsers = (users) => {
	return (dispatch) => {
		dispatch({
			type: "LOAD_USERS",
			payload : users
		});
	}
}



const fetchUsers = () => async(dispatch, getState) => {
	const url = 'http://localhost:5000/people';
	const users = await fetch(url).then(res => res.json());
	dispatch(loadUsers(users));
};


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