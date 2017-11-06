import { selectedRepoSelector } from '../Repos/selectors';

export const selectIssues = state =>
  state.issues[state.repos.selectedRepo] &&
  Object.keys(state.issues[state.repos.selectedRepo]).map(issue => {
    return state.issues[state.repos.selectedRepo][issue];
  });
export const selectLoading = state => state.issues.loading;
