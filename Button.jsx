import React from "react";
import './btnStyle.css';

export default function Button() {
	let count = 0;
	var increase = () => {
		count++;
		alert(count);//updated in memory but react wont re-render the Button component
	}
	var decrease = () => {
		count--;
	}
	var reset = () => count = 0
	return (
		<div>
		<h3>{count}</h3>
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

//this above code updates the count when we click on + or - but it dosent change the count on frontend. 
// for this we need to use state variables!