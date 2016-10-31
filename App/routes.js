import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import HomeViewWrapper from './Components/HomeViewWrapper';

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={HomeViewWrapper} title="Home" />
  </Scene>
);
