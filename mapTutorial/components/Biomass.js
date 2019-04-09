import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard, TouchableOpacity} from 'react-native';
import MapView, {Polygon, Circle} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Card, CardItem} from 'native-base';

let dataKenya = require('./biomass_baringo.json');

const pink = '#ffb3ff';
const blue = '#0073e6';
const yellow = '#ffff66';
const green = '#009933';
const red = '#ff0000';
const orange = '#ff9933';

export default class Biomass extends Component{

  state = {
    data: '',
    visible: false,
    index: 0,
    radius: 1500,
  }

  circleCoordinates = (feature) => {
      console.log(dataKenya.features[feature].geometry.coordinates[0][0].length);
        let LatLng = {
          latitude: dataKenya.features[feature].geometry.coordinates[0][0][0][1],
          longitude: dataKenya.features[feature].geometry.coordinates[0][0][0][0],
        }
      return LatLng;
  }

  onPress = (index) => {
    console.log('Polygon Pressed');
    this.setState(previousState => (
      { 
        visible: !previousState.visible,
        index: index
      }
    ));
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
      <TouchableOpacity style={styles.button}>
            <Text>Legend: </Text>
            <Text>Red are areas with high biomass production</Text>
            <Text>Pink are areas with low biomass produciton</Text>
            <Text>red-orange-yellow-green-blue-pink</Text>
      </TouchableOpacity>
    );
}

  renderCallout = () => {
    if (this.state.visible==true) {
      return (
        <Card>
              <CardItem header>
                <Text>{dataKenya.features[this.state.index].properties.Sublocatio}</Text>
              </CardItem>
              <CardItem footer>
                <Text>Location: {dataKenya.features[this.state.index].properties.Province}, {dataKenya.features[this.state.index].properties.District}, {dataKenya.features[this.state.index].properties.County} </Text>
              </CardItem>
        </Card>
      );
    }
  }

  circleColour = (index) => {
    let value = dataKenya.features[index].properties.AGBP;
    if (value<4000) {
      return red;
    } else if (value<8000) {
      return orange;
    } else if (value<12000) {
      return yellow;
    } else if (value<16000) {
      return green;
    } else if (value<20000) {
      return blue;
    } else {
      return pink;
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
              //onPress={() => this.onPress(index)}
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
                latitude: dataKenya.features[2].geometry.coordinates[0][0][0][1], 
                longitude: dataKenya.features[2].geometry.coordinates[0][0][0][0],
                latitudeDelta: 2,//110,
                longitudeDelta: 2,//20,
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
                    //onPress={() => this.onPress(index)}
                  />
              </View>
            ))}

            </MapView>
            {this.renderCallout()}
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