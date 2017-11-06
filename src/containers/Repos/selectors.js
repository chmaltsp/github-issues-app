export const loadingSelector = () => state => state.repos.loading;

export const reposSelector = () => state => state.repos.repos && state.repos.repos.filter((repo, index) => index < 6);

export const selectedRepoSelector = () => state => state.repos.selectedRepo;
