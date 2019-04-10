import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Polygon, Marker} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input} from 'native-base';

//Ruth class to render data for Fincancial Touchpoints Data
const dataKenya = require('./admin_baringo.json');

const pink = '#ffb3ff';
const blue = '#0073e6';
const yellow = '#ffff66';

export default class FinancialTouchpoints extends Component{
  
  financialTouchpoints (data) {
    dataKenya = data;
  }

  state = {
    data: '',
    color: yellow,
  }

  initMarkers = () => {
    let arr = [];
    for( let i=0; i<dataKenya.features.length/(dataKenya.features.length/50); i++) {
      let LatLng = {
        latitude: dataKenya.features[i].geometry.coordinates[0][0][0][1],
        longitude: dataKenya.features[i].geometry.coordinates[0][0][0][0],
      }
      arr[i] = LatLng;
    }
    return arr;
  }

  renderData = () => {
    return (
      this.initMarkers().map((marker, index) => (
        <View key={index}>
            <Marker
              coordinate = {marker}
              title = 'id = 0992354i3-48530195'
              description = {"Province "+ dataKenya.features[0].properties.Province +  ", District " + dataKenya.features[0].properties.District}
              pinColor = {this.state.color}
            >
            </Marker>
        </View>
      ))
    );
  }

  render() {
      console.log("render data = " + dataKenya.features[1].geometry.coordinates[0][0][0]);

        return (
          <Container>
            <Header style ={{backgroundColor: '#ff9900'}} 
                androidStatusBarColor = '#cc7a00'
                searchBar rounded>
                  <Left>
                    <Button transparent>
                      <Icon name='menu' onPress={() => this.props.navigation.openDrawer()}/>
                    </Button>
                  </Left>
                  <Item style ={{backgroundColor : 'white'}}>
                    <Icon name="ios-search" />
                    <Input placeholder="Search country..." />
                    <Icon name="ios-people" />
                  </Item>
                  <Button transparent>
                    <Text>Search</Text>
                  </Button>
            </Header>
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: dataKenya.features[0].geometry.coordinates[0][0][0][1], 
                longitude: dataKenya.features[0].geometry.coordinates[0][0][0][0],
                latitudeDelta: 2,//110,
                longitudeDelta: 2,//20,
              }}
              customMapStyle = {mapStyle}
            >

            {this.initMarkers().map((marker, index) => (
              <View key={index}>
                  <Marker
                    coordinate = {marker}
                    title = 'id = 0992354i3-48530195'
                    description = {"Province "+ dataKenya.features[0].properties.Province +  ", District " + dataKenya.features[0].properties.District}
                    pinColor = {this.state.color}
                  >
                  </Marker>
              </View>
            ))}
          </MapView>
          
          </Container>
        );
      }
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
  marker: {
    borderColor: '#ffb3ff',
  }
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