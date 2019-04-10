import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Circle} from 'react-native-maps';

//Ruth class to render data for Population Distribution Data

let dataKenya = require('./pop_baringo.json');

const pink = '#ffb3ff';
const blue = '#0073e6';
const yellow = '#ffff66';
const green = '#009933';
const colorBlue = 'Blue';
const colorGreen = 'Green';


export default class Population extends Component {

  Population (data) {
    dataKenya = data;
  }

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
        <TouchableOpacity style={styles.button}>
              <Text>Legend: </Text>
              <Text>Rural areas: {this.state.ruralName}</Text>
              <Text>Urban areas: {this.state.urbanName}</Text>
        </TouchableOpacity>
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
    alignItems: 'stretch',
  },
});
