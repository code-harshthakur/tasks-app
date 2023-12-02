import React from 'react'
import Todo from './todo'

function TodoList({tasks,onToggleCompletion,onDeleteTask}) {
  return (
    <>
    {tasks.map((task) => { <Todo key={task.id} task={task} onToggleCompletion={onToggleCompletion} onDeleteTask={onDeleteTask}/> } )}
    </>
  );
}

export default TodoList