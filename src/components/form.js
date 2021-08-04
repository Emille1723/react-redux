import React from 'react';

const Form = () => {
	return (
		<form className="form">
			<span className="form--title">banking transactions</span>
			<div className="form--input--wrapper" name="text">
				<input type="text" className="form--input"></input>
				<label className="form--input--label">amount to be tendered</label>
			</div>
			<div className="form--input--wrapper" name="radio">
				<input 
					type="radio" 
					className="form--input"
					name="radios"
					id="radio--deposit"
				/>
				<label 
					htmlFor="radio--deposit" 
					className="form--input--label">deposit</label>
				<input 
					type="radio" 
					className="form--input" 
					name="radios"
					id="radio--withdraw"
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
