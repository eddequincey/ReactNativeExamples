import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import FlatListBasics from './FlatListBasics';
import GPS from './GPS';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FlatListBasics />
        <GPS />
      </View>
    );
  }
}