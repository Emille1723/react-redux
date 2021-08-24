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

	const { newTransaction,  transDeposit, transWithdraw} = bindActionCreators(actionCreators, dispatch);

	// isSelected is a boolean that updates once an account is checked
	const isSelect = useSelector( (state) => state.user.isSelected );

	// user state
	const user = useSelector( (state) => state.user.user );



	const handleRadios = evt => {
		submittedData.transactionType = evt.target.value;
	}
	

	const handleSubmit = evt => {
		evt.preventDefault();
		submittedData.amount = amount;

		if(submittedData.transactionType === ''){
			alert('Unable to process function, ensure that the form is completed');
		}
		else{
			setAmount('');
			evt.target.reset();
			initBank(submittedData);
			newTransaction(submittedData);
		}
	}

	const initBank = (formData) => {
		{
			formData.transactionType === "Deposit" ? (
				transDeposit(submittedData.amount)
			):(
				transWithdraw(submittedData.amount)
			)};
	}


	return (
		<form className="form" autoComplete="off" onSubmit={handleSubmit}>
			<span className="form--title">banking transactions</span>
			{isSelect 
			?(	
				<>
					<span className="form--selected--user">
						account selected &#61;&gt; { user.firstName	} {	user.lastName }  <br/> <br/>  current balance &#61;&gt;   ${ user.amount }
					</span>
					<div className="form--input--wrapper" name="text">
						<input 
							type="text" 
							// className="form--input"
							className={`form--input`}
							value = {amount}
							onChange = { (evt) => setAmount(evt.target.value) } 
							pattern="[0-9]{1,10000}"
							name="text--amount"
							required
						/>
						<label className="form--input--label amount--input--label">amount to be tendered</label>
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
				</>
				)
			: (
				<span className="form--selected--user">
			 		select an account to perform a transaction
				</span>
			)};
		</form>
	)
}

export default Form;
