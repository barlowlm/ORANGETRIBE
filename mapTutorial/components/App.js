import React, {Component} from 'react';
import BoundariesMap from './components/MapScreen';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen';
import financialTouchpoints from './components/MapScreenII';
import populationMap from './components/MapScreenIII';
import BiomassMap from './components/MapScreenIV';
import RoadsMap from './components/RoadsMap.js';
import { createStackNavigator, createDrawerNavigator, 
  createAppContainer , DrawerItems} from 'react-navigation';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';


const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', 
      alignItems: 'center', justifyContent: 'center'}}>
      <Image source ={require('./images/logo.png')} 
      style={{height: 100, width: 140, resizeMode: 'contain'}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

// Drawer Navigator
const Drawer = createDrawerNavigator({
  Home1 : financialTouchpoints,
  Biomass1 : BiomassMap,                         //use different map screens
  Population1 : populationMap,
  Boundaries1 : BoundariesMap,
  Finance1 : financialTouchpoints,
  Infrastructure1 : RoadsMap,
}, {contentComponent: CustomDrawerComponent});


// Main App Navigation
const AppStack = createStackNavigator({
  Splash:  SplashScreen,
  Login: LoginScreen,
  Home: Drawer
}, {headerMode : 'none'}
);

const App = createAppContainer(AppStack);

export default App;
