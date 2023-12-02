import {useState} from 'react'
import TodoList from './todoLists'

function TodoWrapper() {
    const [tasks, setTasks] = useState([]);
    // Function to add task
    function addTask(taskText) {
        const newTasks = {
            id: Date.now(),
            text: taskText,
            isCompleted: false
        };
        setTasks([...tasks,newTasks]); // add the new task with the remaining previously added tasks
    }
    function toggleCompletion(taskID) {
        const updatedTasks = tasks.map((task) => { task.id === taskID ? {...task, isCompleted: !task.isCompleted } : task });
        setTasks(updatedTasks);
    }

    function deleteTask(taskID) {
        const updatedTasks = tasks.filter((task) => { task.id !== taskID });
        setTasks(updatedTasks);
    }

  return (
    <>
    <div>
        <div>
            <input type="text" placeholder='New Tasks'/>
            <button onClick={addTask}>Add Task</button>
        </div>
    </div>
    <TodoList tasks={tasks} onToggleCompletion = {toggleCompletion} onDeleteTask={deleteTask} />
    </>
  )
}

export default TodoWrapper