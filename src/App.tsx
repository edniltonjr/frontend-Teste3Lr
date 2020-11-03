/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import { Provider } from 'react-redux';
import Routes from './routes/index';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}
export default App;
