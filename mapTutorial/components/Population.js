import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native';
import MapView, {Polygon, Circle} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Card, CardItem} from 'native-base';

let dataKenya = require('./pop_baringo.json');

const pink = '#ffb3ff';
const blue = '#0073e6';
const yellow = '#ffff66';
const green = '#009933';
const colorBlue = 'blue';
const colorYellow = 'yellow';
const colorPink = 'pink';
const colorGreen = 'green';


export default class Population extends Component {

  state = {
    radius: 2000,
    urbanColour: blue,
    ruralColour: green,
    urbanName: colorBlue,
    ruralName: colorGreen,
  }

  circleCoordinates = (feature) => {
        let LatLng = {
          latitude: dataKenya.features[feature].geometry.coordinates[0][0][0][1],
          longitude: dataKenya.features[feature].geometry.coordinates[0][0][0][0],
        }
      return LatLng;
  }

  initCircles = (length) => {
    let arr = [];
    for(let i=0; i<length; i=i+10) {
      arr[i]=this.circleCoordinates(i);
    }
    return arr;
  }

  renderLegend = () => {
      return (
        <Button style={styles.button}>
              <Text style={justifyItems='center'}>`Rural areas: {this.state.ruralName}, Urban areas: {this.state.urbanName}</Text>
        </Button>
      );
  }

  circleColour = (index) => {
    if (index%30==0) {
      return this.state.urbanColour;
    } else {
      return this.state.ruralColour;
    }
  }

  renderData = () => {
    return (
      this.initCircles(dataKenya.features.length).map((circle, index) => (
          <View key={index}>
              <Circle
                center={circle}
                radius={this.state.radius}
                fillColor = {this.circleColour(index)}
                strokeColor = {this.circleColour(index)}
              />
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
                latitudeDelta: 3,//110,
                longitudeDelta: 3,//20,
              }}
              customMapStyle = {mapStyle}
            >

            {this.initCircles(dataKenya.features.length).map((circle, index) => (
              <View key={index}>
                  <Circle
                    center={circle}
                    radius={this.state.radius}
                    fillColor = {this.circleColour(index)}
                    strokeColor = {this.circleColour(index)}
                  />
              </View>
            ))}

            </MapView>
            {this.renderLegend()}
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
  button: {
    justifyContent: 'flex-end',
    //alignItems: 'stretch',
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