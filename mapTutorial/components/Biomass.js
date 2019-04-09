import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Polygon, Circle} from 'react-native-maps';

let dataKenya = require('./biomass_baringo.json');

const pink = '#ffb3ff';
const blue = '#0073e6';
const yellow = '#ffff66';
const green = '#009933';
const red = '#ff0000';
const orange = '#ff9933';

export default class Biomass extends Component{

  state = {
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
});
