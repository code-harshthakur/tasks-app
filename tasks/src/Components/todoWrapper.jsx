import {useState} from 'react'
import TodoList from './todoLists'

function TodoWrapper() {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState("")
    // Function to handle input change
    function handleInputChange(e) {
        setInputText(e.target.value);
    }
    // Function to add task
    function addTask() {
       if(inputText) {  // If inputed a text/task we create a newTask object
        const newTasks = {
            id: Date.now(),
            isCompleted: false, // initialy set to false
            text: inputText
        };
        setTasks([...tasks,newTasks]); // add the new task with the remaining previously added tasks
       }
    }
    // Function for toggling the task status
    function toggleCompletion(taskID) {
        const updatedTasks = tasks.map((task) => { return( task.id === taskID ? {...task, isCompleted: !task.isCompleted } : task )})
        setTasks(updatedTasks);
    }
//  Function to delete a task
    function deleteTask(taskID) {
        const updatedTasks = tasks.filter((task) => { return( task.id !== taskID )}); // we filter task not having id=argument
        setTasks(updatedTasks);
    }

  return (
    <>
    <div>
        <div>
            <input type="text" placeholder='New Tasks' value={inputText} onChange={handleInputChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
    </div>
    <TodoList tasks={tasks} onToggleCompletion = {toggleCompletion} onDeleteTask={deleteTask} />
    </>
  )
}

export default TodoWrapper