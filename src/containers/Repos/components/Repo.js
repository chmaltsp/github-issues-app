import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { modularScale, em } from 'polished';

import FlexWrapper from '../../../components/FlexWrapper';

const Wrapper = FlexWrapper.extend`
  border-top: 1px solid #777;
  flex-direction: column;
  background-color: ${props => props.active && '#f6f6f6'};
  padding: 0 ${em(16)};
  &:last-child {
    border-bottom: 1px solid #777;
  }
  &:hover {
    cursor: pointer;
    background-color: #f6f6f6;
  }
`;

const Name = styled.h4`
  font-size: ${modularScale(1)};
  margin: ${em(8)} 0;
`;

const Description = styled.p`
  font-size: ${modularScale(0.5)};
`;
const Repo = ({ onClick, repo, selected }) => (
  <Wrapper active={selected === repo.name} onClick={() => onClick(repo)}>
    <Name description={repo.description}>{repo.name}</Name>
    {repo.description && <Description>{repo.description}</Description>}
  </Wrapper>
);

Repo.propTypes = {
  repo: PropTypes.object,
  onClick: PropTypes.func
};
export default Repo;
