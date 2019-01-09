import React from 'react';
import {
  StyleSheet, Text, View, NavigatorIOS,
} from 'react-native';
import Trends from './Components/Trends.js';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Trends,
          title: 'Pretzel',
          passProps: { index: 1 },
        }}
        style={{ flex: 1 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
