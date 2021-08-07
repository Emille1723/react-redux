import React, {	useEffect} from 'react'

const UsersList = () => {

	useEffect( () => {
		const getUsers = async () => {
			const usersfromServer = await fetchUserss();
			
		};

		getUsers();
	}, []);

	const fetchUserss = async () => {
		const res = await fetch('http://localhost:5000/people');
		const data = await res.json();

		console.log('Fetch users from db.json', data);
	}

	return (
		<div className = "userList">
			<span className="userList--title">users</span>
		</div>
	)
}

export default UsersList;
