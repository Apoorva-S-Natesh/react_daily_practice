import React, {useState} from 'react'
import { quiz_data } from './data' //since not a default export data should be inside a {}

export default function Quiz() {
	let [index, setIndex] = useState(0);
	const handleNext = () => {
		setIndex(++index);
	}
	return (
		<>
			<div className='quiz'>
				<h1>Quiz App</h1>
				<h3>{quiz_data[index].Question}</h3>
				<ul>
					<li>{quiz_data[index].Option1}</li>
					<li>{quiz_data[index].Option2}</li>
					<li>{quiz_data[index].Option3}</li>
					<li>{quiz_data[index].Option4}</li>
				</ul>
				<button onClick={handleNext}>Next</button>
			</div>
		</>
	)
}