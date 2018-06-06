import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from './Icon'


class Elements extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Welcome to React</Text>
        </View>
        <Text style={styles.appIntro}>
          Testing my Hybrid App
        </Text>
        <View style={styles.container}>
          <Icon name="home" />
          <Button
            raised
            buttonStyle={{ backgroundColor: '#ff4f00', borderRadius: 10 }}
            textStyle={{ textAlign: 'center' }}
            title={`Welcome to\nReact Native Elements`}
          />
        </View>
      </View>
    );
  }
};

export default Elements;

const styles = StyleSheet.create({
  app: {
    flex: 1
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appTitle: {
    fontSize: 16,
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
})