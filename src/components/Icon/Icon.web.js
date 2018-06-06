import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';


console.log('web icon', Icon)
const iconFontStyles = `@font-face {
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

export default Icon;
