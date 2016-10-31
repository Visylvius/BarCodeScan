import React from 'react';
import {View, Text, StyleSheet, Dimensions, Modal, TouchableHighlight} from 'react-native';
import Camera from 'react-native-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
});

export const HomeViewIos = ({ checkUpcCode, code, ui, closeModal}) => {
  console.log(ui);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Modal onRequestClose={() => closeModal()} transparent={false} visible={ui.showing}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
          <Text style={styles.welcome}>{ui.message}</Text>
            <TouchableHighlight onPress={() => closeModal()}><Text>Close</Text></TouchableHighlight>
        </View>
        </Modal>
            </View>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        onBarCodeRead={(code) => checkUpcCode(code)}
      >
      </Camera>

      <Text style={styles.welcome}>Welcome to the Home Page</Text>
    </View>
  );
};
