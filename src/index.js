import React from 'react';
import ReactDOM from 'react-dom';
import { enableES5 } from 'immer';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './services/i18n';
import store from './store';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

serviceWorker.unregister();
