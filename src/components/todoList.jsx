import React from 'react';
import Proptypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todoList,realIndex ,toggleTodo, deleteTodo }) => {

  return (
    <ul className="list-group row mx-5">
      {
        todoList.map((item, index) => {
          return (
            <Todo
              key={index.toString()}
              todo={item}
              index={index + realIndex}
              toggleTodo={() => toggleTodo(index + realIndex)}
              deleteTodo={()=> deleteTodo(index + realIndex)}
            />
          )
        })
      }
    </ul>
  )
}

TodoList.prototype = {
  todoList: Proptypes.arrayOf(
    Proptypes.shape({
      text: Proptypes.string.isRequired,
      completed: Proptypes.bool.isRequired
    }).isRequired
  ).isRequired,
  realIndex:Proptypes.number.isRequired,
  toggleTodo: Proptypes.func.isRequired,
  deleteTodo: Proptypes.func.isRequired,
}

export default TodoList;