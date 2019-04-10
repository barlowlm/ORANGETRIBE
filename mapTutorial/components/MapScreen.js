import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

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
    blank: [false, false, false, false, false],
    map: "satellite"
  }

  static navigationOptions = {
    title: 'MapScreen',
  };

  renderBiomass = (boxes) => {
    if (boxes[0]== true) {
      return (
        this.state.biomass.renderData()
      );
    }
  }

  renderPopulation = (boxes) => {
    if (boxes[1]== true) {
      return (
        this.state.population.renderData()
      );
    }
  }

  renderBoundaries = (boxes) => {
    if (boxes[2]== true) {
      return (
        this.state.boundaries.renderData()
      );
    }
  }

  renderTouchpoints = (boxes) => {
      if (boxes[3]== true) {
        return (
          this.state.financialTouchpoints.renderData()
        );
      }
  }

  renderRoads = (boxes) => {
    if (boxes[4]==true) {
      return (
        this.state.roads.renderData()
      );
    }
  }

  renderLegends = (boxes) => {
    //population and biomass have legends
    if (boxes[0]==true && boxes[1]==true) {
      return (
          this.state.biomass.renderLegend(),
          this.state.population.renderLegend()
      );
    } else if (boxes[1]==true) {
      return (
        this.state.population.renderLegend()
      );
    } else if (boxes[0]==true) {
      return (
        this.state.biomass.renderLegend()
      );
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    userMap = this.props.navigation.getParam('userMap', this.state.map);
    let boxes = this.props.navigation.getParam('boolean', this.state.blank);
      return (
        <Container>
  
          <Header style ={{backgroundColor: '#cc6600'}} 
            androidStatusBarColor = '#994d00'>
              <Left>
                <Button transparent onPress={() => this.props.navigation.navigate("Settings")}>
                  <Icon name='settings'/>
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
            mapType = {userMap}
            //mapType = "hybrid"
            // mapType = "standard"
  
            initialRegion={{
            latitude: -0.106029551095291, longitude: 37.23769925816912,
            latitudeDelta: 5, //110,
            longitudeDelta: 5,//20,
            }}
            customMapStyle = {mapStyle}>
            {this.renderTouchpoints(boxes)}
            {this.renderBiomass(boxes)}
            {this.renderPopulation(boxes)}
            {this.renderRoads(boxes)}
            {this.renderBoundaries(boxes)}
            
          </MapView>
          {this.renderLegends(boxes)}   
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