import React from 'react';
import { View } from 'react-native';
import FlatListBasics from './FlatListBasics';
import GPS from './GPS';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingTop: 22,
        alignItems: 'stretch',
        padding:2,
      }}>

        {/* Comment/un-comment to see each example (or both at the same time) */}
        {/* GPS Example */}
        <GPS />
        
        {/* List Example */}
        {/* <FlatListBasics /> */}

      </View>
    );
  }
}