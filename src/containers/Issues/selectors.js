import { selectedRepoSelector } from '../Repos/selectors';

export const selectIssues = state => state.issues[state.repos.selectedRepo];
export const selectLoading = state => state.issues.loading;
