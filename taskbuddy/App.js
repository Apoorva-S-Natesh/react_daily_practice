import React, {useEffect, useState} from 'react'
import TaskForm  from './components/TaskForm';

function App() {
	const [tasks, setTasks] = useState([]);
	useEffect(() => { //Gives life cycle model for functional components
		localStorage.setItem("tasks", JSON.stringify(tasks))
	},[tasks])

	const addTask = (task) => {
		setTasks([...tasks,task]) // create a new array and give it to tasks, whatever was present in task give it to tasks
	}
  return (
    <div>
      <TaskForm addTask={addTask}/>
    </div>
  )
}

export default App;
//AS soon as component is mounted, useEffect will be called