import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

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

const LayoutContainer = FlexWrapper.extend``;

const { persistor, store } = createStore();
class App extends Component {
    render() {
        return (
            <PersistGate persistor={persistor}>
                <Provider store={store}>
                    <AppContainer>
                        <AppTitle>GITHUB ISSUE APP</AppTitle>
                        <LayoutContainer>
                            <Repos />
                        </LayoutContainer>
                    </AppContainer>
                </Provider>
            </PersistGate>
        );
    }
}

export default App;
