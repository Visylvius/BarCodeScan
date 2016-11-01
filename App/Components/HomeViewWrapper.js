import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';

import {HomeViewIos} from './HomeViewIos';
import {HomeViewAndroid} from './HomeViewAndroid';

export default class HomeViewWrapper extends Component {
  state = {
    device: null
  }
  componentDidMount() {
    switch (Platform.OS) {
      case 'ios':
        return this.setState({ device: 'ios' });
      case 'android':
        return this.setState({ device: 'android' });
      default:
        return null;
    }
  }
  render() {
    if (!this.state.device) {
      return <View><Text>Loading...</Text></View>;
    } else if (this.state.device === 'ios') {
      return <HomeViewIos {...this.props} />;
    }
    return <HomeViewAndroid {...this.props}/>;
  }
}
