import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native'
import { Button } from 'react-native-elements';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

let Icon;

let iconFontStyles;
// Create stylesheet
if (Platform.OS === 'web') {
  Icon = require('react-native-vector-icons/dist/FontAwesome').default;
  console.log('Icon', Icon)
  iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: FontAwesome;
  }`;
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
} else {
  Icon = require('@expo/vector-icons').Ionicons
}


console.log(Platform.OS)
class Elements extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Welcome to React ⚛️</Text>
        </View>
        <Text style={styles.appIntro}>
          Testing my Hybrid App
        </Text>
        <View style={styles.container}>
          {/* <Icon name="rocket" size={30} color="#900" /> */}
          <Icon name="md-home" size={32} color="green" />
          {
            Platform.OS === 'web' &&
            <Icon name="rocket" size={30} color="#900" />
          }
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