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
                [action.repoName]: action.issues.reduce((prev, next, index) => {
                    if (!state[action.repoName] || (state[action.repoName] && !state[action.repoName][next.number])) {
                        prev[next.number] = next;
                        prev[next.number].priority = index + 1;
                        return prev;
                    } else {
                        prev[next.number] = state[action.repoName][next.number];
                        return prev;
                    }
                }, {})
            };
        case GET_ISSUES_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        // Probably a better way to do this, maybe store priorities of issues in different reducer
        // It's alot of copying but gets the job done
        case INCREASE_PRIORITY:
            if (state[action.repoName][action.issue].priority === 1) return state;
            return {
                ...state,
                [action.repoName]: {
                    ...state[action.repoName],
                    [action.issue]: {
                        ...state[action.repoName][action.issue],
                        priority: state[action.repoName][action.issue].priority - 1
                    }
                }
            };
        case DECREASE_PRIORITY:
            if (state[action.repoName][action.issue].priority === Object.keys(state[action.repoName]).length) return state;

            return {
                ...state,
                [action.repoName]: {
                    ...state[action.repoName],
                    [action.issue]: {
                        ...state[action.repoName][action.issue],
                        priority: state[action.repoName][action.issue].priority + 1
                    }
                }
            };
        default:
            return state;
    }
}

export default issuesReducer;
