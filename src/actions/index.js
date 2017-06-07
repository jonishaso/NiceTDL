import fetch from 'isomorphic-fetch';

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

export const filters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
}

export var addTodo_action = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

export var deleteTodo_action = (id) =>{
  return {
    type: DELETE_TODO,
    id
  }
}

export var toggleTodo_action = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export var setFilter_action = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}

export var fetchData_action = (url) => {
  let request = new Request(url, {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  return (dispatch) => {
    fetch(request)
      .then(res => {
        return res.json()
      })
      .then(j => {
        j.map((item, index) => {
          return dispatch(addTodo_action(item.title));
        })
      })
  }
}
