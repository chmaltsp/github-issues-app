import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FlexWrapper from '../../components/FlexWrapper';
import Instructions from '../../components/Instructions';

import Repo from './components/Repo';
import { getUserRepos, selectRepo } from './actions';
import { loadingSelector, reposSelector } from './selectors';

/**
 * Repos Container
 */

const Wrapper = FlexWrapper.extend`
  background-color: #e8e8e8;
  max-width: 500px;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;
// eslint-disable
export class ReposComponent extends Component {
  // eslint-enable

  componentDidMount() {
    this.props.getRepos();
  }

  handleSelectRepo = () => {};
  render() {
    const { repos, selectRepo } = this.props;
    return (
      <Wrapper>
        <Instructions>Select a Repository</Instructions>
        {repos && repos.map((repo, index) => <Repo repo={repo} onClick={selectRepo} key={index} />)}
      </Wrapper>
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
    loading: loadingSelector()(state)
  };
};

export function mapDispatchToProps(dispatch) {
  return {
    getRepos: () => dispatch(getUserRepos()),
    selectRepo: repo => dispatch(selectRepo(repo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReposComponent);
