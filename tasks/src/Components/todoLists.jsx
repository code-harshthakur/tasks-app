import Todo from './todo'
import PropTypes from 'prop-types'

function TodoList({tasks,onToggleCompletion,onDeleteTask}) {
  return (
    <div className='mt-4'>
    {tasks.map((task) => (
      <Todo 
         key={task.id} 
         task={task} 
         onToggleCompletion={onToggleCompletion} 
         onDeleteTask={onDeleteTask}/> 
         ) )}
    </div>
  );
}

TodoList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onToggleCompletion: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,  

};

export default TodoList