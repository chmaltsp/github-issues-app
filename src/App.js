import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import Repos from './containers/Repos';
import FlexWrapper from './components/FlexWrapper';
import AppTitle from './components/AppTitle';

import './theme/globalStyles';

const AppContainer = FlexWrapper.extend`
  background-color: #0059bd;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

const store = createStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <AppTitle>GITHUB ISSUE APP</AppTitle>
          <Repos />
        </AppContainer>
      </Provider>
    );
  }
}

export default App;
