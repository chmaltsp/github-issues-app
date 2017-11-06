import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export default injectGlobal`
  ${normalize()};
  body {
    font-size: 16px;
  }
`;
