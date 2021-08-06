import React, { useState } from 'react';


const Form = () => {

	const [amount, setAmount] = useState("");
	const [deposit, setDeposit] = useState(false);
	const [withdraw, setWithdraw] = useState(false);

	const [data, setData] = useState({});


	// const handleChange = () => {
	// 	setData(prev => ({...prev, [e.target.name]: [e.target.value]}))
	// }

	const handleSubmit = (evt) => {
		evt.preventDefault();
		console.log(`Amount entered ${amount}`);
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<span className="form--title">banking transactions</span>
			<div className="form--input--wrapper" name="text">
				<input 
					type="text" 
					className="form--input"
					value = {amount}
					// onChange = {handleChange}
					name={"amount"}
					onChange = { (evt) => setAmount(evt.target.value)	} 
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
					checked = {deposit}
					value = {deposit}
					onChange = {(evt) => setDeposit(evt.target.checked)}
				/>
				<label 
					htmlFor="radio--deposit" 
					className="form--input--label">deposit</label>
				<input 
					type="radio" 
					className="form--input" 
					name="radios"
					id="radio--withdraw"
					checked = {withdraw}
					value = {withdraw}
					onChange = {(evt) => setWithdraw(evt.target.checked)}
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
