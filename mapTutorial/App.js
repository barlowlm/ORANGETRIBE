/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import Login from './components/Login'

//link to local file
let boundaries = require('./AdminBoundariesLight.json');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    data: ''
  }

  componentDidMount = () => {
    fetch('http://sloder.netsoc.ie/server.php',{
      method: 'POST'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      console.log("test");
      this.setState({
        data: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
    <View>
      //check if json file contains anything in if and only then try to display
        <Text>
          {this.state.data.body}
        </Text>
      </View>
      
      /*
    <MapView
    style={styles.mapStyle}
    initialRegion={{
      latitude: 8.7832,
      longitude: 34.5085,
      latitudeDelta: 110,
      longitudeDelta: 20,
    }}
  >
  */
    );
  }
}

/* <MapView.Marker
            coordinate = {{
              latitude: boundaries.features[0].geometry.coordinates[0][1][1],
              longitude: boundaries.features[0].geometry.coordinates[0][1][0],
            }}
      /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mapStyle: {
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
