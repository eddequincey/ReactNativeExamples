import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert, AsyncStorage} from 'react-native';

export default class GPS extends Component {
  
  constructor(props) {
    super(props);
      this.state = {
      latitude: null,
      longitude: null,
      storedLat: null,
      storedLong: null,
    }
  }

  onPressSet = () => {
    AsyncStorage.multiSet([['storedLat', this.state.latitude.toString()], ['storedLong', this.state.longitude.toString()]]);
  }

  onPressGet = () => {

    AsyncStorage.getItem('storedLat').then((value) => {
      if (value !== null) {
          console.log("Stored Latitude:", value);
      }
    });
    
    Alert.alert(
      'Your co-ordinates are:',
      this.state.latitude.toString(),
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )

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
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPressSet}
        >
        <Text>Set Location</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPressGet}
        >
        <Text>Get Location</Text>
        </TouchableHighlight>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   marginTop: 22,
   
  },
  myText: {
    backgroundColor: 'skyblue',
    padding: 10,
    fontSize: 20,
    marginBottom: 2,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 2,
  }
})