import { selectedRepoSelector } from '../Repos/selectors';

export const selectIssues = state =>
  state.issues[state.repos.selectedRepo] &&
  Object.keys(state.issues[state.repos.selectedRepo]).map(issue => {
    return state.issues[state.repos.selectedRepo][issue];
  }).sort((first, second) => {
    if (first.priority >= second.priority) {
      return 1;
    } else if (first.priority <= second.priority) {
      return -1;
    } else {
      return 0;
    }
  });
export const selectLoading = state => state.issues.loading;
