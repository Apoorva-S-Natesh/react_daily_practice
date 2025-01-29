import React from "react";

function Button({count, setCount}) {
	//let count = 0;
	const increase = (event) => {
		event.preventDefault();
		//count++;
		//alert(count);//updated in memory but react wont re-render the Button component
		setCount(count + 1);
	}
	const decrease = (event) => {
		event.preventDefault();
		//count--;
		setCount(count - 1);
	}
	var reset = (event) => {
		event.preventDefault();
		setCount(0);
	}
	return (
		<>
		<h3>{count}</h3>
		<button onClick={(event) => increase(event)}>+</button>
		<button onClick={(event) => decrease(event)}>-</button>
		<button onClick={(event) => reset(event)}>Reset</button>
		</>
	);
}
export default Button;
//this above code updates the count when we click on + or - but it dosent change the count on frontend. 
// for this we need to use state variables!