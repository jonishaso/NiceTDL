import Proptypes from 'prop-types';
import React from 'react';

const Todo = ({ index, todo, deleteTodo, toggleTodo }) => {
  let classNameString_pre = "list-group-item justify-content-between list-group-item-action";
  let classNameString_append = todo.completed ? 'list-group-item-info' : 'list-group-item-success';
  let classNameString = classNameString_pre.concat(' ', classNameString_append);
  return (

    <div className="text-left" onClick={toggleTodo}>
      <li
        className={classNameString}
      >
        {todo.text}
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true" onClick={deleteTodo}>&times;</span>
        </button>
      </li>
    </div>
  )
}

Todo.prototype = {
  todo: Proptypes.shape({
    text: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired
  }).isRequired,
  index: Proptypes.number.isRequired.isRequired,
  toggleTodo: Proptypes.func.isRequired,
  deleteTodo: Proptypes.func.isRequired
}

export default Todo;

