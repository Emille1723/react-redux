import React, {	useState, useEffect} from 'react'
import { useSelector } from 'react-redux';

const UsersList = () => {

	


	return (
		<div className = "userList">
			<span className="userList--title">users</span>
			{/* { allUsers.map((user) => (
				<>
					<span key={user.id}>{user.name}</span>
				</>
			))}; */}
		</div>
	)
}

export default UsersList;
