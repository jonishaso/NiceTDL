import React, { Component } from 'react';
import { connect } from 'react-redux'
import VisibableTodoList from './visibaleTodoList'
import VisibableAddForm from './visibaleAddForm'
import VisibableFilters from './visibaleFilter'
import { fetchData_action } from '../actions'
import logo from '../logo.svg';
import '../style/header.css'


class AppTodoList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchData_action('https://jsonplaceholder.typicode.com/todos'))
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row px-5 my-2">
          <VisibableAddForm />
        </div>
        <div className="row my-2 px-5">
          <div className="col-sm-2">
            <VisibableFilters />
          </div>
          <div className="col-sm-10">
            {this.props.todoList.length === 0 ?
              (<div className="text-center">
                <img src={logo} className="Logo-in-loading" alt="..."/>
                </div>)
              : (<VisibableTodoList />)}
          </div>
        </div>
      </div>
          );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AppTodoList);
