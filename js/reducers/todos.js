import { handleActions } from 'redux-actions';
import { ADD_TODO, TOGGLE_TODO } from '../actions/ActionTypes';

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = handleActions({
  ADD_TODO:    (state, action) => {
      return [
        ...state,
        todo(undefined, action)
      ]
  },
  TOGGLE_TODO: (state, action) => {
      return state.map(t =>
        todo(t, action)
      )
  },
}, []);

export default todos