import React from 'react'

function Todo({task,onToggleCompletion,onDeleteTask}) {
  return (
    <>
     <div>
        <p>{task.text}</p>
        {/* Buttons for toggling completion & deleting tasks */}
        <button>{task.isCompleted ? 'incomplete' : 'Completed'}</button>
        <button>Delete</button>
     </div>
    </>
  )
}

export default Todo