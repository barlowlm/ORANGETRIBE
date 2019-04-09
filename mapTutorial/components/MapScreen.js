import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title, Item, Input} from 'native-base';

import FinancialTouchpoints from './FinancialTouchpoints';
import Biomass from './Biomass';
import Boundaries from './boundaries';
import Population from './Population';
import Roads from './RoadsMap';

export default class MapScreen extends Component{
  state = {
    data: '',
    visible: true,
    financialTouchpoints: new FinancialTouchpoints(),
    biomass: new Biomass(),
    boundaries: new Boundaries(),
    roads: new Roads(),
    population: new Population(),
  }

  renderTouchpoints = () => {
      //pass some boolean from query class
      //can we have class instances to allow for this?
  }

  renderBoundaries = () => {

  }

  renderBiomass = () => {

  }

  renderRoads = () => {

  }

  renderPopulation = () => {

  }

  renderLegends = () => {
    //population and biomass have legends
  }

  render() {
    return (
      <Container>

        <Header style ={{backgroundColor: '#cc6600'}} 
          androidStatusBarColor = '#994d00'>
            <Left>
              <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                <Icon name='menu'/>
              </Button>
            </Left>
            <Body>
              <Title>GeoFind</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.props.navigation.navigate('Query')}>
                <Icon name='ios-pin'/>
              </Button>
            </Right>
        </Header>
         
        <MapView
          style={styles.mapStyle}
          // mapType = "terrain"
          mapType = "satellite"
          //mapType = "hybrid"
          // mapType = "standard"

          initialRegion={{
          latitude: -0.106029551095291, longitude: 37.23769925816912,
          latitudeDelta: 5, //110,
          longitudeDelta: 5,//20,
          }}
          customMapStyle = {mapStyle}>
          {this.state.biomass.renderData()}
 
        </MapView>
        {this.state.biomass.renderLegend()}      
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