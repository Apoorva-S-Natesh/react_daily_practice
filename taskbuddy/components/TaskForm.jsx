import React, { useState } from 'react'
import {PlusCircle} from 'lucide-react'

export default function TaskForm({addTask}) {
	 let [task, setTask] = useState('');
	 let [priority, setPriority] = useState('Low');
	 let[category, setCategory] = useState('General');

	 const handleSubmit = (e) => {
		e.preventDefault();
		addTask({text:task, priority, category, completed:false}) //send data to addTask Method
	 }

	return (
		<div>
			<form onSubmit={handleSubmit} className='task-form'>
			<div id="inp">
				<input 
					type='text'
					value={task}
					onChange={(e)=>setTask(e.target.value)}
				/>
				<button type='submit'>
					<PlusCircle size={29}/>
				</button>
			</div>

				<div id="btns">
				<select value={priority} onChange={(p)=>setPriority(p.target.value)}>
					<option value="Low">Low</option>
					<option value="Medium">Medium</option>
					<option value="High">High</option>
				</select>

				<select value={category} onChange={(c)=>setCategory(c.target.value)}>
					<option value="General">General</option>
					<option value="Work">Work</option>
					<option value="Personal">Personal</option>
				</select>
				</div>
			</form>
		</div>
	)
}