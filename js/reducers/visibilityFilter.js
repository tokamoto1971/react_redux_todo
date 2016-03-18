import { handleActions } from 'redux-actions';
import { SET_VISIBILITY_FILTER } from '../actions/ActionTypes';

const visibilityFilter = handleActions({
  SET_VISIBILITY_FILTER: (state, action) => action.filter,
}, 'SHOW_ALL');

export default visibilityFilter