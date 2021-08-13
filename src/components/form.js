import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';




const Form = () => {
	const dispatch = useDispatch();
	const [amount, setAmount] = useState("");
	const [transaction, setTransaction] = useState("");
	const [deposit, setDeposit] = useState(false);
	const [withdraw, setWithdraw] = useState(false);

	const submittedData = {
		amount : '',
		transactionType : '',
	};

	const { newTransaction } = bindActionCreators(actionCreators, dispatch);

	const user = useSelector(	(state) => state.user);
	console.log();


	// const handleChange = () => {
	// 	setData(prev => ({...prev, [e.target.name]: [e.target.value]}))
	// }

	const handleSubmit = evt => {
		evt.preventDefault();
		submittedData.amount = amount;
		submittedData.transactionType = 'some transaction value bruv';


		setAmount('');
		setDeposit(false);
		setWithdraw(false);
		setTransaction('');
		newTransaction(submittedData);

		// formActivity();
	}

	const handleRadios = evt => {
		evt.preventDefault();
	}

	// const formActivity = () => {
	// 	dispatch({
	// 		type : 'NEW_TRANSACTION',
	// 		payload : submittedData
	// 	});
	// }

	return (
		<form className="form" onSubmit={handleSubmit}>
			<span className="form--title">banking transactions</span>
			<span className="form--selected--user"></span>
			<div className="form--input--wrapper" name="text">
				<input 
					type="text" 
					className="form--input"
					value = {amount}
					onChange = { (evt) => setAmount(evt.target.value) } 
					required
				/>
				<label className="form--input--label">amount to be tendered</label>
			</div>
			<div className="form--input--wrapper" name="radio">
				<input 
					type="radio" 
					className="form--input"
					name="radios"
					id="radio--deposit"
					// checked = {deposit}
					// value = {deposit}
					onChange = {(evt) => setDeposit(evt.currentTarget.checked)}
				/>
				<label 
					htmlFor="radio--deposit" 
					className="form--input--label">deposit</label>
				<input 
					type="radio" 
					className="form--input" 
					name="radios"
					id="radio--withdraw"
					// checked = {withdraw}
					// value = {withdraw}
					onChange = {(evt) => setWithdraw(evt.currentTarget.checked)}
				/>
				<label 
					htmlFor="radio--withdraw" 
					className="form--input--label">withdraw</label>
			</div>
			<input type="submit" className="form--submit" value="complete transaction"/>
		</form>
	)
}

export default Form;
