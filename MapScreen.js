import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Polygon,Marker,Callout} from 'react-native-maps';
let dataReady=true;
const dataKenya = require('./MtKenyaFull.json');

export default class MapScreens extends Component{
  state = {
    data: '',
    dataReady: false
  }

  polygonCoordinates = (feature) => {
      let i;
      let arr = [];
      console.log(dataKenya.features[feature].geometry.coordinates[0][0].length);
      for (i=0; i<dataKenya.features[feature].geometry.coordinates[0][0].length; i++) {
        let LatLng = {
          latitude: dataKenya.features[feature].geometry.coordinates[0][0][i][1],
          longitude: dataKenya.features[feature].geometry.coordinates[0][0][i][0],
        }
        arr[i] = LatLng;
      }
      return arr;
  }

  onPress = () => {
    console.log('Polygon Pressed');
    this.state.visible = true;
    console.log(this.state.visible);
  }

  announce = async () => {
    let data = await dataKenya();
    dataReady = true;
    console.log(data);
  }

  render() {
      console.log("render data = " + dataKenya.features[1].geometry.coordinates[0][0][0]);
      if (dataReady == false) {
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
                latitude: dataKenya.features[4].geometry.coordinates[0][0][15][1], 
                longitude: dataKenya.features[4].geometry.coordinates[0][0][15][0],
                latitudeDelta: 1,//110,
                longitudeDelta: 1,//20,
              }}
              customMapStyle = {mapStyle}
            >
              <Polygon
                  coordinates={
                    this.polygonCoordinates(0)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              ></Polygon>
              <Polygon
                  coordinates={
                    this.polygonCoordinates(1)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />
              <Polygon
                  coordinates={
                    this.polygonCoordinates(2)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />
              <Polygon
                  coordinates={
                    this.polygonCoordinates(3)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />
              <Polygon
                  coordinates={
                    this.polygonCoordinates(4)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />
              <Polygon
                  coordinates={
                    this.polygonCoordinates(5)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />
              <Polygon
                  coordinates={
                    this.polygonCoordinates(6)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />
              <Polygon
                  coordinates={
                    this.polygonCoordinates(7)
                  }
                  fillColor = '#009933'
                  strokeColor = '#009933'
                  //tappable = 'true'
                  onPress={this.onPress}
              />

          </MapView>
        );
      }
  }
}

/*
    if (this.state.dataReady == false) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View> 
      );
    } else {
    }
*/
/*
      <Marker
            coordinate = {{
              latitude: this.state.data.features[0].geometry.coordinates[0][0][1],
              longitude: this.state.data.features[0].geometry.coordinates[0][0][0],
            }}
            title = {this.state.data.features[0].properties.Sublocatio}
            description = {"Province "+ this.state.data.features[0].properties.Province +  ", District " + this.state.data.features[0].properties.District + ", County " +  this.state.data.features[0].properties.County}
          />   

           <Polygon
              coordinates={[
                {latitude: -0.106029551095291, longitude: 37.23769925816912},
                {latitude: -0.152315168375523, longitude: 37.30826938167124},
                {latitude: -0.42652654430798, longitude: 37.20400819630606},
                {latitude: -0.407037564698918, longitude: 37.11433039434282},
                {latitude: -0.106029551095291, longitude: 37.23769925816912},
              ]}
              fillColor = '#009933'
              strokeColor = '#009933'
              //tappable = 'true'
              onPress={this.onPress}
            />

            <Polygon
        coordinates = {this.polygonCoordinates(0)}
        fillColor = '#009933'
        strokeColor = '#009933'
        onPress={this.onPress}
      />
*/
/*
  componentDidMount = () => {
    fetch('http://sloder.netsoc.ie/server.php',{
      method: 'POST',
      headers: {
        'Content-type':'application/x-www-form-urlencoded'
      },
      body:"choice=Sublocation%20Chemoinoi"
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      console.log("test");
      this.setState({
        data: JSON.parse(responseJson),
      })
      console.log(this.state.data);
      //console.log(this.polygonCoordinates());
    })
    .then(() => {
      this.setState({
        dataReady: true,
      })
      console.log(this.state.dataReady);
    })
    .catch((error) => {
      console.error(error);
    });
  }
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
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