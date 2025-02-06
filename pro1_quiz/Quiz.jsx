import React, {useState} from 'react'
import { quiz_data } from './data' //since not a default export data should be inside a {}
import './style.css'

export default function Quiz() {
	let [option, setOption] = useState('')

	let [index, setIndex] = useState(0);

	let[finish, setFinish] = useState(false);

	let[score, setScore] = useState(0);

	const handleNext = () => {
		if (index < quiz_data.length-1) {
			if (quiz_data[index].CorrectAnswer === option){
				setScore(score+1);
			}
			setIndex(++index);
			setOption('');
		}
		else {
			setFinish(true)
		}
	}

	if (finish) {
		return(
			<div className='scorePage'>
				<h1> Quiz Finished </h1>
				<h3> Your Score is {score} of {quiz_data.length}</h3>
			</div>
		)
	}

	const handleSelect = (optn)=>{
		setOption(optn);
	}

	return (
		<>
			<div className='quiz'>
				<h1>Quiz App</h1>
				<h3>{quiz_data[index].Question}</h3>
				<ul>
					<li className={option === 'Option1' ? 'selected' : ''}
					onClick={()=>{handleSelect('Option1')}}>{quiz_data[index].Option1}</li> 
					<li className={option === 'Option2' ? 'selected' : ''}
					onClick={()=>{handleSelect('Option2')}}>{quiz_data[index].Option2}</li>
					<li className={option === 'Option3' ? 'selected' : ''}
					onClick={()=>{handleSelect('Option3')}}>{quiz_data[index].Option3}</li>
					<li className={option === 'Option4' ? 'selected' : ''}
					onClick={()=>{handleSelect('Option4')}}>{quiz_data[index].Option4}</li> {/*Since we are calling a function if its acepting an argument then we need to wrap it in a function, if it doesnt take an argument then it  can be directly called.*/}
				</ul>
				<button onClick={handleNext} disabled = {!option}>Next</button>
				<h5>Question {index+1} of {quiz_data.length}</h5>
			</div>
		</>
	)
}