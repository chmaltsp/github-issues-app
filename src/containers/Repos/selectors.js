export const loadingSelector = () => state => state.repos.loading;

export const reposSelector = () => state => state.repos.repos && state.repos.repos.filter((repo, index) => index < 6);
