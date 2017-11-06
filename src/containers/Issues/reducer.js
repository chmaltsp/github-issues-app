/**
 *  issuesReducer reducer
 */

// Import Action Types
import { GET_ISSUES, SET_ISSUES, GET_ISSUES_FAIL } from './constants';

const initialState = {
  loading: false
};

function issuesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ISSUES:
      return { ...state, loading: true };
    case SET_ISSUES:
      return {
        ...state,
        loading: false,
        [action.repoName]: action.issues
      };
    case GET_ISSUES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export default issuesReducer;
