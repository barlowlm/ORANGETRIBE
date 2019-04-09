import React, {Component} from 'react';
import MapScreen from './components/MapScreen';
import LoginScreen from './components/screens/LoginScreen';
import SplashScreen from './components/screens/SplashScreen';
import QueryScreen from './components/screens/QueryScreen';
import UserScreen from './components/screens/UserScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import { createStackNavigator, createDrawerNavigator, 
  createAppContainer , DrawerItems} from 'react-navigation';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 150, backgroundColor: 'white', 
      alignItems: 'center', justifyContent: 'center'}}>
      <Image source ={require('./components/images/logo.png')} 
      style={{height: 120, width: 180, resizeMode: 'contain'}}/>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

// Drawer Navigator
const Drawer = createDrawerNavigator({
  Map1 : MapScreen,
  User1 : UserScreen,
  Settings1 : SettingsScreen
},{contentComponent: CustomDrawerComponent});


// Main App Navigation
const AppStack = createStackNavigator({
  Splash:  SplashScreen,
  Login: LoginScreen,
  Home: Drawer, 
  Query: QueryScreen,
  MapScreen: MapScreen,
}, {headerMode : 'none'}
);

const App = createAppContainer(AppStack);

export default App;
