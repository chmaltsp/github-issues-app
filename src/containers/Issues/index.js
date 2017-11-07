import React, { Component } from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectIssues, selectLoading } from './selectors';
import { increasePriorirty, decreasePrioirity } from './actions';
import Issue from './components/Issue';
import FlexWrapper from '../../components/FlexWrapper';

/**
 * IssuesComponent
 */

const Wrapper = FlexWrapper.extend`
  background-color: #e8e8e8;
  width: 70%;
  min-width: 300px;
  flex-direction: column;
`;

const Message = styled.h4`
  padding: 0 ${em(16)};
`;

export class IssuesComponent extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { issues, loading, increasePriorirty, decreasePrioirity } = this.props;
    return (
      <Wrapper>
        {loading && <Message>Loading...</Message>}
        {!loading && issues && issues.length === 0 && <Message>There are no open issues</Message>}
        {issues && issues.map((issue, index) => <Issue issue={issue} key={index} index={index} increase={increasePriorirty} decrease={decreasePrioirity} />)}
      </Wrapper>
    );
  }
}

IssuesComponent.propTypes = {
  issues: PropTypes.array,
  loading: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    issues: selectIssues(state),
    loading: selectLoading(state)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
  return {
    increasePriorirty: (issue, index) => dispatch(increasePriorirty(ownProps.selectedRepo, issue, index)),
    decreasePrioirity: (issue, index) => dispatch(decreasePrioirity(ownProps.selectedRepo, issue, index))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(IssuesComponent);
