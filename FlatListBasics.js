import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
         
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Juliet'},
          ]}

          renderItem={({item}) => <View style={styles.bBorder}><Text style={styles.item}>{item.key}</Text></View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'black',
    color: 'white',
  },
  bBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
})