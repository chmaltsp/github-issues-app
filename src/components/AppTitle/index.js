import React from 'react';
import styled from 'styled-components';
import { modularScale } from 'polished';

const AppTitle = styled.h1`
  font-size: ${modularScale(4)};
  color: #fff;
`;
export default () => <AppTitle>GITHUB ISSUES APP</AppTitle>;
