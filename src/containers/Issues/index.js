import React, { Component, PropTypes } from 'react';

/**
 * IssuesComponent
 */
export class IssuesComponent extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return <div>MY COMPONENT</div>;
  }
}

IssuesComponent.propTypes = {
  prop: PropTypes.type.isRequired
};

export default IssuesComponent;
