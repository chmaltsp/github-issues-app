/**
 *  reposReducer
 */

// Import Action Types
import { GET_REPOS, SET_REPOS, GET_REPOS_FAIL, SELECT_REPO } from './constants';

const initialState = {
  loading: false
};

function reposReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return {
        ...state,
        loading: true
      };
    case SET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.repos
      };
    case GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case SELECT_REPO:
      return {
        ...state,
        selectedRepo: action.repoName
      };
    default:
      return state;
  }
}

export default reposReducer;
