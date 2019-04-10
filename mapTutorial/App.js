import React, {Component} from 'react';
import MapScreen from './components/MapScreen';
import LoginScreen from './components/screens/LoginScreen';
import SplashScreen from './components/screens/SplashScreen';
import QueryScreen from './components/screens/QueryScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import { createStackNavigator, 
  createAppContainer } from 'react-navigation';

// Main App Navigation - Michael
const AppStack = createStackNavigator({
  Splash:  SplashScreen,
  Login: LoginScreen, 
  Query: QueryScreen,
  MapScreen: MapScreen,
  Home: MapScreen,
  Settings: SettingsScreen
}, {headerMode : 'none'}
);

const App = createAppContainer(AppStack);

export default App;
