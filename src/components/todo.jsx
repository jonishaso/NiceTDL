import Proptypes from 'prop-types';
import React from 'react';


const Todo = ({ index, todo, deleteTodo, toggleTodo }) => {
  let uncompletedString = "container list-group-item list-group-item-action border-0  mb-2";
  let completedString = "container list-group-item list-group-item-action border-0 mb-2 list-group-item-success";

  return (
    <li className={todo.completed ? completedString : uncompletedString}>
      <input type="checkbox" checked={todo.completed ? 'checked' : ''} onClick={toggleTodo} />
      <h6><span className="badge badge-default badge-pill  badge-danger mr-5 ml-3" onClick={deleteTodo}>&times;</span></h6>
      <div className="text-left font-italic lead">
        {todo.text}
      </div>
    </li>
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

