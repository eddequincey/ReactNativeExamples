import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class GPS extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ 
          latitude: position.coords.latitude ,
          longitude: position.coords.longitude,
        })
      },
      (error) => { console.log(error); },
      { enableHighAccuracy: true, timeout: 30000 }
    )
  }
  
  render() {
    return  (
      <View style={styles.container}>
        <Text style={styles.myText}>Latitude: {this.state.latitude}</Text>
        <Text style={styles.myText}>Longitude: {this.state.longitude}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: 'skyblue',
  },
  myText: {
    padding: 10,
    fontSize: 20,
  },
})