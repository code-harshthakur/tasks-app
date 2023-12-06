import PropTypes from 'prop-types'
function Todo({task,onToggleCompletion,onDeleteTask}) {
  return (
    <>
     <div>
        <p>{task.text}</p>
        {/* Buttons for toggling completion & deleting tasks */}
        <button onClick={() =>{onToggleCompletion(task.id)}}> {task.isCompleted ? 'incomplete' : 'Completed'} </button>
         {/* Delete Button */}
         <button onClick={ () => { onDeleteTask(task.id) } }>Delete</button>
     </div>
    </>
  )
}

Todo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleCompletion: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Todo