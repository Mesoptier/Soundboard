import './styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App.jsx';
import configureStore from './configureStore';
import consoleErrorReporter from './consoleErrorReporter';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render((
  <AppContainer errorReporter={consoleErrorReporter}>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
), root);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./containers/App').default;

    ReactDOM.render((
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    ), root);
  });
}
