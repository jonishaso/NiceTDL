import React, { Component } from 'react';
import { addTodo_action } from '../actions';
import { connect } from 'react-redux';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    if (this.state.value) {
      this.props.addATodo(this.state.value);
      this.setState({ value: '' });
    }
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="jumbotron container-fluid">
        <div className="row">
          <h1 className="display-2 col-sm-3">Hello, world!</h1>
          <p className="lead col-sm-9">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
        <hr className="my-4" />
        <div className="row">
          <p className="lead col-sm-3">
            This page enable to add todo in the input form on left, and is able to filter todos by click ALL, COMPELTED, and ACTIVE below, removing a todo by click the cross in the list, and click one todo for marking it complelted status.
          </p>
          <div className="col-sm-9">
            <form
              className="form-inline row"
              onSubmit={this.handleSubmit}
            >
              <label className="col-sm-2" htmlFor="inlineFormInput">Todo's Content</label>
              <input
                type="text"
                className="form-control col-sm-5"
                id="inlineFormInput"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary col-sm-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addATodo: (value) => dispatch(addTodo_action(value))
  }
}
const visibableAddForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);

export default visibableAddForm;
