import { createAction } from 'redux-actions';
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './ActionTypes';


let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

// export const addTodo             = createAction(ADD_TODO);
// export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER);
// export const toggleTodo          = createAction(TOGGLE_TODO);

// export const addTodo             = createAction(ADD_TODO             , (text)   => { id: nextTodoId++, text});
// export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, (filter) => { filter: filter });
// export const toggleTodo          = createAction(TOGGLE_TODO          , (id)     => { id: id });
