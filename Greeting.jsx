export function Greeting(props) {
	
	return (
		<>
			<h1>{props.name}</h1>
			<h3>More than {props.number}</h3>
		</>
	)
}

//Props are immutable inside the child (cannot change inside the child, here in Greeting) - it is a read only property
/*
 export function Greeting(name, number, last_name) {
	
	return (
		<>
			<h1>{name}</h1>
			<h3>More than {number} {last_name}</h3>
		</>
	)
}

only parent to child Data can flow
 */