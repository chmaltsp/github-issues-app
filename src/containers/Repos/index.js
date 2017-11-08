import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Issues from '../Issues';
import FlexWrapper from '../../components/FlexWrapper';
import Instructions from '../../components/Instructions';

import Repo from './components/Repo';

import { getUserRepos, selectRepo } from './actions';
import { loadingSelector, reposSelector, selectedRepoSelector } from './selectors';

/**
 * Repos Container
 */

const Container = FlexWrapper.extend`
    background-color: #e8e8e8;
    max-width: ${props => (props.wide ? '700px' : '500px')};
    width: 100%;
    justify-content: center;
    flex-direction: column;
`;

const Column = FlexWrapper.extend`
    flex-direction: column;
    width: ${props => (props.wide ? '40%' : '100%')};
`;

// eslint-disable
export class ReposComponent extends Component {
    // eslint-enable

    componentDidMount() {
        this.props.getRepos();
    }

    handleSelectRepo = () => {};
    render() {
        const { repos, selectRepo, selectedRepo } = this.props;
        return (
            <Container wide={selectedRepo !== null}>
                {repos && <Instructions>{selectedRepo ? 'Prioiritize Issues' : 'Select a Repo'}</Instructions>}
                <FlexWrapper>
                    {repos && (
                        <Column wide={selectedRepo}>
                            {repos.map((repo, index) => <Repo repo={repo} selected={selectedRepo} onClick={selectRepo} key={index} />)}
                        </Column>
                    )}
                    {selectedRepo && <Issues selectedRepo={selectedRepo} />}
                </FlexWrapper>
            </Container>
        );
    }
}

ReposComponent.propTypes = {
    repos: PropTypes.array,
    loading: PropTypes.bool,
    getRepos: PropTypes.func,
    selectRepo: PropTypes.func
};

const mapStateToProps = state => {
    return {
        repos: reposSelector()(state),
        loading: loadingSelector()(state),
        selectedRepo: selectedRepoSelector()(state)
    };
};

export function mapDispatchToProps(dispatch) {
    return {
        getRepos: () => dispatch(getUserRepos()),
        selectRepo: repo => dispatch(selectRepo(repo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposComponent);
