import React from 'react';
import { View, Text, Platform } from 'react-native';
import Icon from './Icon'
console.log('universal icon', Icon)

const UniversalIcon = ({ name }) => {
  return (
    <View>
      <Icon name={`${Platform.OS !== 'web' ? 'md-' : ''}${name}`} size={32} color="green" />
      <Text> Hai </Text>
    </View>
  );
};

export default UniversalIcon;
