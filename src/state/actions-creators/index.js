export const loadUsers = (users) => {
	return (dispatch) => {
		dispatch({
			type: "FETCHED_USERS",
			payload : users
		});
	}
}
export const fetchUsers = () => async(dispatch) => {
	const url = 'http://localhost:5000/people';
	try{
		const users = await fetch(url).then(res => res.json());
		dispatch(loadUsers(users));
		return users;
	}
	catch(error){
		console.log(error);
	}
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