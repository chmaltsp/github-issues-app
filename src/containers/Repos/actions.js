/**
 * Action Creators for Repos reducer
**/

import { GET_REPOS, SET_REPOS, GET_REPOS_FAIL } from './constants';
import { getRepoIssues } from '../Issues/actions';
import api from '../../utils/api';

export function getUserRepos() {
  return async dispatch => {
    dispatch(getRepos());
    try {
      const response = await api.get('/user/repos');
      dispatch(setRepos(response.data));
    } catch (err) {
      console.error(err);
      dispatch(getReposFail(err));
    }
  };
}

export function getRepos() {
  return {
    type: GET_REPOS
  };
}

export function setRepos(repos) {
  return {
    type: SET_REPOS,
    repos
  };
}

export function getReposFail(error) {
  return {
    type: GET_REPOS_FAIL,
    error
  };
}

export function selectRepo(repo) {
  console.log(repo);
  return async dispatch => {
    await dispatch(setSelectedRepo(repo));
    await dispatch(getRepoIssues(repo));
  };
}
export function setSelectedRepo(repo) {
  return {
    type: SELECT_REPO,
    repoName: repo.name
  };
}
