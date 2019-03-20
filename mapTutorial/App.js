import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen';
import MapScreen from './components/MapScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
  Home: MapScreen,
  headerMode: 'screen'
});


const App = createAppContainer(RootStack);

export default App;
