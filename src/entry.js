import './styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import configureStore from './configureStore';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render((
  <AppContainer>
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
