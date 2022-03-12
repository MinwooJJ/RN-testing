import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Profile from './src/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile userName="LOGAN" name="MINWOO JUNG" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
