import React, {useEffect, useState} from 'react'
import TaskForm  from './components/TaskForm';
import TaskList from './components/TaskList';
import './components/Style.css' 

function App() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => { //Gives life cycle model for functional components
		localStorage.setItem("tasks", JSON.stringify(tasks))
	},[tasks])

	const addTask = (task) => {
		setTasks([...tasks,task]) // create a new array and give it to tasks, whatever was present in task give it to tasks
	}

	const updateTask = (index, updatedTask) => {
		const newTask =[...tasks]
		newTask[index] = updatedTask;
		setTasks(newTask);
	}

	const deleteTask=(index)=> {
		setTasks(tasks.filter((_,i)=>i!==index)) //bypass the first parameter _ (dont want to give any 1st parameter)
	}

  return (
	<div className='App'>
		<header className='bg-gray-900 py-6 px-4 shadow-md'>
			<div className='max-w-4xl mx-auto flex items-center justify-between'>
				<h1 className='text-4xl font-bold text-white'>Task <span className='text-yellow-400'>Buddy</span></h1>
				<p className='text-grey-400 italic'>Your friendly task manager</p>
			</div>
		</header>
	    <TaskForm addTask={addTask}/>
		<TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default App;
//AS soon as component is mounted, useEffect will be called