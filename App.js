import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/styles/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>AppRandomTeam</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.forest_greentraditional,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
