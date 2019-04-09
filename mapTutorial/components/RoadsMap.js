import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';

let dataKenya = require('./roads_major.json');

const yellow = '#ffff66';

export default class Roads extends Component{

  Roads (data) {
    dataKenya = data;
  }

  state = {
    index: 0,
    polygonColor: yellow,
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
            ></Polyline>
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