import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default function MessengerScreen() {
  return <ExpoConfigView />;
}

MessengerScreen.navigationOptions = {
  title: 'app.json',
};
