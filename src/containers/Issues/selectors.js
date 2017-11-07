import { selectedRepoSelector } from '../Repos/selectors';

export const selectIssues = state =>
  state.issues[state.repos.selectedRepo] &&
  Object.keys(state.issues[state.repos.selectedRepo]).map(issue => {
    return state.issues[state.repos.selectedRepo][issue];
  }).sort((first, second) => {
    console.log(first, second);
    return 1;
  });
export const selectLoading = state => state.issues.loading;
