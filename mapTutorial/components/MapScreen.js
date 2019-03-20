import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

type Props = {};
export default class MapScreens extends Component<Props>{
  state = {
    data: ''
  }

  componentDidMount = () => {
    fetch('http://sloder.netsoc.ie/server.php',{
      method: 'GET'
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
     /* <View>
        <Text>
          {this.state.data.body}
        </Text>
      </View>*/
    <MapView
    style={styles.mapStyle}
  initialRegion={{
    latitude: 8.7832,
    longitude: 34.5085,
    latitudeDelta: 110,
    longitudeDelta: 20,
    }}
  />
    );
  }

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
  })
};