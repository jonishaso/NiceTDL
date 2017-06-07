import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO, filters } from '../actions/index';
// import { combineReducers } from 'redux';



var todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
        return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
}

var todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [todo(undefined, action), ...state];
    case DELETE_TODO:
      state.splice(action.id,1);
      return [...state]; 
    case TOGGLE_TODO:
      return state.map((item, index) => {
        if (index === action.id)
          return todo(item, action);
        else
          return item;
      })
    default:
      return state;
  }
}

var setFilter = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// export var rootReducers = combineReducers((state = {}, action) => {
//     return {
//         visibilityFilter: setFilter(state.visibilityFilter, action),
//         todoList: todos(state.todoList, action)
//     }
// })
export var rootReducers = (state = {}, action) => {
  return {
    visibilityFilter: setFilter(state.visibilityFilter, action),
    todoList: todos(state.todoList, action)
  }
};