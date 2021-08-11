import React, {	useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const UsersList = () => {

	// useEffect = 
	const dispatch = useDispatch();
	// setting up actionCreators to fetchusers and update global state instead of typing i tlong way
	// const ActionCreators = bindActionCreators(actionCreators, dispatch);
	// const { fetchUsers } = bindActionCreators(actionCreators, dispatch);
	const users = useSelector(	(state) => state.users);

	return (
		<div className = "userList">
			<span className="userList--title">users</span>
			{/* { au.map((user) => (
				<>
					<span key={user.id}>{user.name}</span>
				</>
			))}; */}
		</div>
	)
}

export default UsersList;
