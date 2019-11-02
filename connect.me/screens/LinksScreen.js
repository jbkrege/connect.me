import React from 'react';
import { ExpoLinksView } from '@expo/samples';
import * as WebBrowser from 'expo-web-browser';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
  Button,
} from 'react-native';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       <ExpoLinksView />
       */}
      <Text style={styles.readyText}>
        Are you ready?
      </Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={5}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        />
        <Button
          title="Play!"
          type="outline"
        />
    </View>

  );
}

{/*LinksScreen.navigationOptions = {
  title: 'Links',
};*/}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  readyText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#2e78b7',
    paddingVertical: 15,
  },
});
