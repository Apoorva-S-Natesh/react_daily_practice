import React, { useState } from "react";
import Button from "./Button";
import './btnStyle.css';

export default function Form() {
	const [count, setCount] = useState(0); // State is lifted here
	const name = 'Programmer';

	return (
		<>
			<h1>Hello, {name}</h1>
			<form>
				<input type="text" placeholder="Product Name"/>
				<div style={{ marginTop: "10px" }}></div>
				<Button count={count} setCount={setCount} />
			</form>
		</>
	);
}