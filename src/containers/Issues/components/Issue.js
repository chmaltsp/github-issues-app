import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { modularScale, em } from 'polished';

import FlexWrapper from '../../../components/FlexWrapper';

const Wrapper = FlexWrapper.extend`
  border-top: 1px solid #777;
  flex-direction: row;
  background-color: ${props => props.active && '#f6f6f6'};
  padding: 0 ${em(16)};
  &:last-child {
    border-bottom: 1px solid #777;
  }
  &:hover {
    background-color: #f6f6f6;
  }
`;

const Title = styled.h4`
  font-size: ${modularScale(1)};
  margin: ${em(8)} 0;
`;
const Description = styled.p`
  margin: 0;
  font-size: ${modularScale(0.5)};
`;
const Priority = styled.p`
  margin: ${em(8)} 0;
  font-size: ${modularScale(0.5)};
`;

const InfoColumn = FlexWrapper.extend`
  width: 80%;
  flex-direction: column;
`;

const PrioirtyControls = FlexWrapper.extend`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 20%;
`;

const PriorityButton = FlexWrapper.extend`
  width: 100%;
  height: 100%;
  font-size: ${em(20)};
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #e7e7e7;
  }
`;
const Issue = ({ onClick, issue, selected, increase, decrease }) => (
  <Wrapper>
    <InfoColumn>
      <Title description={issue.body}>{issue.title}</Title>
      <Description>{issue.body}</Description>
      <Priority>Priority: {issue.priority}</Priority>
    </InfoColumn>
    <PrioirtyControls>
      <PriorityButton onClick={() => increase(issue.number)}>+</PriorityButton>
      <PriorityButton onClick={() => decrease(issue.number)}>-</PriorityButton>
    </PrioirtyControls>
  </Wrapper>
);

Issue.propTypes = {
  issue: PropTypes.object,
  onClick: PropTypes.func
};
export default Issue;
