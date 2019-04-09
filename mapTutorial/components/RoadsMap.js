import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import MapView, {Polygon, Polyline} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Card, CardItem} from 'native-base';

let dataKenya = require('./roads_major.json');

const red = '#f44242';
const blue = '#0073e6';
const yellow = '#ffff66';
const green = '#009933';
const pink = '#ffb3ff';

export default class Roads extends Component{

  Roads (data) {
    dataKenya = data;
  }


  state = {
    data: '',
    visible: false,
    index: 0,
    polygonColor: pink,
  }

  polygonCoordinates = (feature) => {
      let i;
      let arr = [];
      let index=0;
      for (i=0; i<dataKenya.features[feature].geometry.coordinates[0].length; i=i+7) {
        let LatLng = {
          latitude: dataKenya.features[feature].geometry.coordinates[0][i][1],
          longitude: dataKenya.features[feature].geometry.coordinates[0][i][0],
        }
        arr[index++] = LatLng;
      }
      return arr;
  }

  initPolygons = (length) => {
    let arr = [];
    for(let i=0; i<length; i++) {
      arr[i]=this.polygonCoordinates(i);
    }
    return arr;
  }

  renderData = () => {
    return (
      this.initPolygons(dataKenya.features.length).map((polygon, index) => (
        <View key={index}>
            <Polyline
              coordinates={polygon}
              fillColor = {this.state.polygonColor}
              strokeColor = {this.state.polygonColor}
              //onPress={() => this.onPress(index)}
            ></Polyline>
        </View>
      ))
    );
  }

  render() {
      console.log("render data = " + dataKenya.features[1].geometry.coordinates[0][0]);
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
                latitude: dataKenya.features[0].geometry.coordinates[0][0][1], 
                longitude: dataKenya.features[0].geometry.coordinates[0][0][0],
                latitudeDelta: 10,//110,
                longitudeDelta: 10,//20,
              }}
              customMapStyle = {mapStyle}
            >

            {this.initPolygons(dataKenya.features.length).map((polygon, index) => (
              <View key={index}>
                  <Polyline
                    coordinates={polygon}
                    fillColor = {this.state.polygonColor}
                    strokeColor = {this.state.polygonColor}
                    //onPress={() => this.onPress(index)}
                  ></Polyline>
              </View>
            ))}

            </MapView>

          </Container>
      );
    //}
  }
}

/*



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