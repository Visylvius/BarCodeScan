import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-native-router-flux';

import store from './store';
import { scenes } from './routes';

export const Root = () =>
  <Provider store={store}>
    <Router scenes={scenes}/>
  </Provider>;
