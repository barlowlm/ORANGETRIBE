import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Header, Left,Button, Icon, Item} from 'native-base';

//Ruth class to render data for administrative boundaries Data

let dataKenya = require('./admin_baringo.json');

const red = '#f44242';
const orange = '#ff9933';
const yellow = '#ffff66';
const green = '#009933';
const blue = '#0073e6';
const darkBlue = '#004d99';
const purple = '#9966ff';
const pink = '#ffb3ff';
const black = '#000000';
const white = '#FFFFFF'

export default class Boundaries extends Component{

  //Constructor for initalsing new data - for when you hook up the database
    Boundaries (data) {
        this.dataKenya = data;
    }

  state = {
    index: 0,
    polygonColor: pink,
  }

  polygonCoordinates = (feature) => {
      let i;
      let arr = [];
      for (i=0; i<dataKenya.features[feature].geometry.coordinates[0][0].length; i++) {
        let LatLng = {
          latitude: dataKenya.features[feature].geometry.coordinates[0][0][i][1],
          longitude: dataKenya.features[feature].geometry.coordinates[0][0][i][0],
        }
        arr[i] = LatLng;
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

  renderCallout = () => {
    if (this.state.visible==true) {
      return (
        <Button style={styles.button}>
          <Text>PLZ</Text>
        </Button>
      );
    }
  }

  changeColour = () => {
    num = Math.floor(Math.random() * 10) + 1;
    switch(num) {
      case 1:
        this.state.polygonColor = red;
        break;
      case 2: 
        this.state.polygonColor = orange;
        break;
      case 3:
        this.state.polygonColor = yellow;
        break;
      case 4:
        this.state.polygonColor = green;
        break;
      case 5:
        this.state.polygonColor = blue;
        break;
      case 6: 
        this.state.polygonColor = darkBlue;
        break;
      case 7:
        this.state.polygonColor = purple;
        break;
      case 8: 
        this.state.polygonColor = pink;
        break;
      case 9:
        this.state.polygonColor = black;
        break;
      case 10: 
        this.state.polygonColor = white;
        break;
    }
  }

  renderData = () => {
    return (
      this.initPolygons(dataKenya.features.length).map((polygon, index) => (
        <View key={index}>
            <Polygon
              coordinates={polygon}
              fillColor = {this.state.polygonColor}
              strokeColor = '#FFFFFF'
              //tappable = {true}
              //onPress={() => this.onPress()}
            />
        </View>
      ))
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
  button: {
    justifyContent: 'flex-end',
    //alignItems: 'stretch',
  }
});
