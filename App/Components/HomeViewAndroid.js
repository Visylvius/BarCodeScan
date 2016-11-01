import React from 'react';
import {View, Text, StyleSheet, Dimensions, Modal, TouchableHighlight} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

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
      <BarcodeScanner
         onBarCodeRead={(code) => checkUpcCode(code)}
         style={{ flex: 1 }}
       />
      <Text style={styles.welcome}>Welcome to the Home Page</Text>
    </View>
  );
};
