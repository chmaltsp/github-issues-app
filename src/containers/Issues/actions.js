/**
 * Action Creators for Issues reducer
**/
import api from '../../utils/api';
import { GET_ISSUES, SET_ISSUES, GET_ISSUES_FAIL, INCREASE_PRIORITY, DECREASE_PRIORITY } from './constants';

export function getRepoIssues(user, repo) {
    return async dispatch => {
        dispatch(getIssues());
        try {
            const response = await api.get(`/repos/${user}/${repo}/issues`);
            console.log(response);
            dispatch(setIssues(repo, response.data));
        } catch (error) {
            console.error(error);
            dispatch(getIssuesFail(error));
        }
    };
}
export function getIssues() {
    return {
        type: GET_ISSUES
    };
}

export function setIssues(repoName, issues) {
    return {
        type: SET_ISSUES,
        repoName,
        issues
    };
}

export function getIssuesFail(error) {
    return {
        type: GET_ISSUES_FAIL,
        error
    };
}

export function increasePriorirty(repoName, issue, index) {
    return {
        type: INCREASE_PRIORITY,
        repoName,
        issue,
        index
    };
}
export function decreasePrioirity(repoName, issue, index) {
    return {
        type: DECREASE_PRIORITY,
        repoName,
        issue,
        index
    };
}
