import React from 'react';
import { useSelector, useDispatch } from 'react-redux';




const Transactions = () => {


	const colours = useSelector( (state) => state.colours.colours );
	const T = useSelector( (state) => state.transactions.transactions);
	console.log(T);


	return (
		<div className="transactions">
			<span className="transactions--title">transaction history</span>
			<div className="transactions--wrapper">
				{T.length == 0 
					? (<span className="transactions--wrapper--message">no history to show yet</span>)
					: (
						T.map((t,i) => (
							<div key={t.id} className="transactions--item">
								<i style={{backgroundColor:colours[i].colour}}></i>
								<span className="transactions--item--text" name="date">{t.transactionDate}</span>
								<span className="transactions--item--text" name="type">type &#8594; {t.transactionType}</span>
								<span className="transactions--item--text" name="amount">amount &#8594; {t.transactionAmount}</span>
							</div>
						))
				)}
			</div>
		</div>
	)
}

export default Transactions;
