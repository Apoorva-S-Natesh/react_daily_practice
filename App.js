import Button from "./Button";

export default function App() {
	const  name ='Programmer'
	return (
		<>
			<h1>Hello, {name}</h1>
			<form>
				<input type="text" placeholder="First Name"/>
				<div style={{ marginTop: "10px"}}></div>
				<Button />
			</form>
			<br></br>
			<form>
				<input type="text" placeholder="Last Name"/>
				<div style={{ marginTop: "10px"}}></div>
				<Button />
			</form>
		</>
	)
}