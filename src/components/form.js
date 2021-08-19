import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';




const Form = () => {
	const dispatch = useDispatch();
	const [amount, setAmount] = useState("");
	const [transaction, setTransaction] = useState("");
	// const [deposit, setDeposit] = useState(false);
	// const [withdraw, setWithdraw] = useState(false);

	const submittedData = {
		amount : '',
		transactionType : '',
	};

	const { newTransaction } = bindActionCreators(actionCreators, dispatch);

	// isSelected is a boolean that updates once an account is checked
	const isSelect = useSelector( (state) => state.user.isSelected );

	// user state
	const user = useSelector( (state) => state.user.user );


	
	const handleSubmit = evt => {
		evt.preventDefault();

		if(validateForm() === true){
			submittedData.amount = amount;
			// submittedData.transactionType = handleRadios;

			setAmount('');
			setTransaction('');
			alert('submitted');
			newTransaction(submittedData);

			// formActivity();
		}
		else{
			alert('Unable to process function');
		}
	}

	const validateForm = () => {
		if(submittedData.transactionType === ''){
			alert('Complete form to continue!');
			return false;
		}
		else{
			return true;
		}
	}

	const handleRadios = evt => {
		evt.preventDefault();
		submittedData.transactionType = evt.target.value;
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
			{isSelect 
			?(	<span className="form--selected--user">
			 		account selected &#8594; { user.firstName	} {	user.lastName }  <br/> <br/>  current balance &#8594;  ${ user.amount }
				</span>)
			: (
				<span className="form--selected--user">
			 		select an account to continue
				</span>
			)};
			<div className="form--input--wrapper" name="text">
				<input 
					type="text" 
					className="form--input"
					value = {amount}
					onChange = { (evt) => setAmount(evt.target.value) } 
					pattern="[0-9]{1,10000}"
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
					value = "Deposit"
					onChange = {handleRadios}
					// onChange = {(evt) => setDeposit(evt.target.value)}
					// onChange = {(evt) => setDeposit(evt.currentTarget.checked)}
				/>
				<label 
					htmlFor="radio--deposit" 
					className="form--input--label">deposit</label>
				<input 
					type="radio" 
					className="form--input" 
					name="radios"
					id="radio--withdraw"
					value = "Withdraw"
					onChange = {handleRadios}
					// onChange = {(evt) => setDeposit(evt.target.value)}
					// onChange = {(evt) => setWithdraw(evt.currentTarget.checked)}
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
