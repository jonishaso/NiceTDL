import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo_action, deleteTodo_action, filters } from '../actions';
import TodoList from '../components/todoList';
import PaginationList from '../components/pagination';
const TODOS_PERPAGE = 10;


const getListOnPage = (todoList, activePage) => {
  let indexOfLast = activePage * TODOS_PERPAGE;
  let indexOfFirst = indexOfLast - TODOS_PERPAGE;
  let currentTodos = todoList.slice(indexOfFirst, indexOfLast);
  return currentTodos;
}



class VisibableTodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    }
    this.handleSelect = this.handleSelect.bind(this);
  }


  handleSelect(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    let { todoList, toggleTodo, deleteTodo } = this.props;
    let Pages = Math.ceil(this.props.todoList.length / TODOS_PERPAGE);
    
    return (
      <div className="col-sm-12">
        <TodoList
          todoList={getListOnPage(todoList, this.state.currentPage)}
          realIndex={(this.state.currentPage - 1) * TODOS_PERPAGE}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <PaginationList
          pageTotalNumber={Pages}
          click={this.handleSelect}
          pageNow={this.state.currentPage}
        />
      </div>
    )
  }
}

const getFilteredList = (todoList, filterName) => {
  switch (filterName) {
    case filters.SHOW_ALL:
      return todoList;
    case filters.SHOW_COMPLETED:
      return todoList.filter((i) => { return i.completed === true });
    case filters.SHOW_ACTIVE:
      return todoList.filter((i) => { return i.completed === false });
    default:
      return todoList;
  }
}

const mapStaeToProps = (state) => {
  return {
    todoList: getFilteredList(state.todoList, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo_action(id))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo_action(id))
    },
  }
}

export default connect(
  mapStaeToProps,
  mapDispatchToProps
)(VisibableTodoList);;
