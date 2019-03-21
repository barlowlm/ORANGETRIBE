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
      method: 'POST'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      console.log("test");
      this.setState({
        data: JSON.parse(responseJson)
      })
      console.log(this.state.data);
      console.log(this.state.data.features[0].geometry.coordinates[0]);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    
    if (this.state.data=='') {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View> 
      );
    } else {
      return (
        <MapView
          style={styles.mapStyle}
        initialRegion={{
          latitude: this.state.data.features[0].geometry.coordinates[0][0][1],
          longitude: this.state.data.features[0].geometry.coordinates[0][0][0],
          latitudeDelta: 2,//110,
          longitudeDelta: 2,//20,
          }}
          customMapStyle = {mapStyle}
          
        >

          <MapView.Marker
            coordinate = {{
              latitude: this.state.data.features[0].geometry.coordinates[0][0][1],
              longitude: this.state.data.features[0].geometry.coordinates[0][0][0],
            }}
          > 
          </MapView.Marker>


          
        </MapView>
      );
    }
  }
}

/*
          <MapView.Polygon
            
            coordinate = {this.state.data.features[0].geometry.coordinates[0]}
            strokeColor="#F00"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          /> */

/*
<MapView
          style={styles.mapStyle}
        initialRegion={{
          latitude: 8.7832,
          longitude: 34.5085,
          latitudeDelta: 110,
          longitudeDelta: 20,
          }}this.state.data.features[0].geometry.coordinates[0]
        >

        <MapView.Marker
            coordinate = {{
              latitude: [0][1],
              longitude: this.state.data.features[0].geometry.coordinates[0][0][0],
            }}
          /> 
        
          
        </MapView> 

  ***************************


*/

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
var mapStyle = [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]