/**
 *  issuesReducer reducer
 */

// Import Action Types
import { GET_ISSUES, SET_ISSUES, GET_ISSUES_FAIL, INCREASE_PRIORITY, DECREASE_PRIORITY } from './constants';

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
        [action.repoName]: action.issues.reduce((prev, next, index) => {
          console.log(state[next.number]);
          if (!state[next.number]) {
            prev[next.number] = next;
            prev[next.number].priority = 0;
            return prev;
          } else {
            return prev;
          }
        }, {})
      };
    case GET_ISSUES_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case INCREASE_PRIORITY:
      return {
        ...state,
        [state[action.repoName][action.issue]]: state[action.repoName][action.issue].priority++
      };
    case DECREASE_PRIORITY:
      return {
        ...state,
        [state[action.repoName][action.issue]]: state[action.repoName][action.issue].priority--
      };
    default:
      return state;
  }
}

export default issuesReducer;
