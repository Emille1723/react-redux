import React, {	useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const UsersList = () => {

	

	const colours = [
        {
            id:0,
            colour : '#ff8a80'
        },
        {
            id:1,
            colour : '#26a69a'
        },
        {
            id:2,
            colour : '#ab47bc'
        },
        {
            id:3,
            colour : '#9575cd'
        },
        {
            id:4,
            colour : '#03a9f4'
        },
        {
            id:5,
            colour : '#607d8b'
        },
    ];
	
	// useEffect = 
	const dispatch = useDispatch();
	// setting up actionCreators to fetchusers and update global state instead of typing i tlong way
	// const ActionCreators = bindActionCreators(actionCreators, dispatch);
	const { fetchUsers, loadUsers } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
        const getUsers  = async () => {
            const usersfromserver = await fetchUsers();
        }
        getUsers();
    }, []);

	const users = useSelector(	(state) => state.users.users);
	console.log('userList component => ', users);


	const userSelect = (id) => {
		
	}
	return (
		<div className = "userList">
			<span className="userList--title">users listing</span>
			<div className="userList--item--wrapper">
				{ users.map((user, i) => (
					// <>
						<span className="userList--item" key={user.id}>
							<span className="userList--item--image" style={{borderColor:colours[i].colour}}>
								<i></i>
							</span>
							<span className="userList--item--name">
								{user.firstName} {user.lastName}
							</span>
							<span className="userList--item--amount">
								${user.amount}
							</span>
							<span className="userList--item--lastWorked">
								last worked => {user.lastWorked}
							</span>
							<button className="userList--item--select" onClick={userSelect(user.id)}></button>
						</span>
					//</>
				))}
			</div>
		</div>
	)
}

export default UsersList;