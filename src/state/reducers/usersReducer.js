const intialState = {
	users : []
};


const reducer = ( state = intialState , action) => {
	// destructured action object
	const {type, payload } = action;
	switch (type){
		case "FETCHED_USERS":
			return {...state, users : [...state.users, payload]};
			// return state, {
			// 		users : payload
			// 	};	
		default:
			return state;
	}
};


// const fetchUsers = () => async(dispatch, getState) => {
// 	const users = await fetch('http://localhost:5000/people').then(res => res.json());
// 	dispatch(loadUsers(users));
// };


export default reducer;

