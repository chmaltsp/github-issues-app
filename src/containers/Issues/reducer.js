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
        [action.repoName]: [
          ...action.issues.filter(newIssue => !newIssue.priority).map(issue => ({
            ...issue,
            priority: 0
          }))
        ]
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
        [action.repoName]: state[action.repoName].map(issue => {
          if (issue.number === action.issue) {
            issue.priority++;
          }
          return issue;
        })
      };
    case DECREASE_PRIORITY:
      return {
        ...state,
        [action.repoName]: state[action.repoName].map(issue => {
          if (issue.number === action.issue) {
            issue.priority--;
          }
          return issue;
        })
      };
    default:
      return state;
  }
}

export default issuesReducer;
