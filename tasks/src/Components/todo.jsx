import PropTypes from 'prop-types'
function Todo({task,onToggleCompletion,onDeleteTask}) {
  return (
    <>
     <div className='bg-white shadow-md rounded px-4 py-2 mb-2 mx-w-sm'>
        <p className='text-gray-800'>{task.text}</p>
        {/* Buttons for toggling completion & deleting tasks */}
        <button 
            onClick={() =>{onToggleCompletion(task.id)}}
            className={`mr-2 px-3 py-1 rounded ${task.isCompleted ? 'bg-green-400' : 'bg-yellow-400'}`}> 
          {task.isCompleted ? 'incomplete' : 'Completed'} 
        </button>
             {/* Delete Button */}
             <button onClick={ () => { onDeleteTask(task.id) } }
              className='px-3 py-1 bg-red-500 text-white rounded'
             >
              Delete</button>
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
        