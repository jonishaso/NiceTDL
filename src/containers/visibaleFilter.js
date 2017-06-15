import React, { Component } from 'react';
import { setFilter_action, filters, fetchData_action } from '../actions'
import { connect } from 'react-redux'

const activeString = 'nav-link btn active';
const inactiveString = 'nav-link btn';

class FilterBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    }
    this.handleClick_ALL = this.handleClick_ALL.bind(this);
    this.handleClick_Completed = this.handleClick_Completed.bind(this);
    this.handleClick_Active = this.handleClick_Active.bind(this);
    this.handleClick_FetchData = this.handleClick_FetchData.bind(this);
  }

  handleClick_ALL(e) {
    this.props.changeFilter(filters.SHOW_ALL);
    this.setState({ active: 'all' })
    e.preventDefault();
  }

  handleClick_Completed(e) {
    this.props.changeFilter(filters.SHOW_COMPLETED);
    this.setState({ active: 'completed' })
    e.preventDefault();
  }

  handleClick_Active(e) {
    this.props.changeFilter(filters.SHOW_ACTIVE);
    this.setState({ active: 'active' })
    e.preventDefault();
  }

  handleClick_FetchData(e) {
    this.props.fetchData('https://jsonplaceholder.typicode.com/todos');
    this.setState({ active: 'fetch' })
    e.preventDefault();
  }
 
  render() {

    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a
            className={this.state.active === 'all' ? activeString : inactiveString}
            children="All"
            onClick={this.handleClick_ALL}
          />
        </li>
        <li className="nav-item">
          <a
            className={this.state.active === 'completed' ? activeString : inactiveString}
            children="COMPLETED"
            onClick={this.handleClick_Completed}
          />
        </li>
        <li className="nav-item">
          <a
            className={this.state.active === 'active' ? activeString : inactiveString}
            children="ACTIVE"
            onClick={this.handleClick_Active}
          />
        </li>
        <li className="nav-item">
          <a
            className={this.state.active === 'fetch' ? activeString : inactiveString}
            children="FETCH DATA"
            onClick={this.handleClick_FetchData}
          />
        </li>
      </ul>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (filterName) => { dispatch(setFilter_action(filterName)) },
    fetchData: (url) => { dispatch(fetchData_action(url)) }
  }
}

const VisibableFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBtns);

export default VisibableFilters;
