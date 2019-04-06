import React, {Component} from 'react';
import {StyleSheet, Text, View, Button,
   TouchableWithoutFeedback, StatusBar} from 'react-native';

//type Props = {};
export default class SplashScreen extends Component/*<Props>*/ {
  render() {
    return (
        <TouchableWithoutFeedback style={styles.container} 
            onPress={() => this.props.navigation.navigate('Login')}>
          <View style={styles.container} >
            <StatusBar backgroundColor = '#b35900'/>
            <Text style={styles.title}>TRIBE </Text>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e67300',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 51,
        color: 'white'
    },
  });