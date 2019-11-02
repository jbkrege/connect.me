import React from 'react';
import { Text } from 'react-native';

export function InterestGrid(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
