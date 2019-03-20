import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableWithoutFeedback} from 'react-native';

//type Props = {};
export default class SplashScreen extends Component/*<Props>*/ {
  render() {
    return (
      <TouchableWithoutFeedback style={styles.container} 
          onPress={() => this.props.navigation.navigate('Login')}>
        <View style={styles.container}>
            <Text style={styles.title}>TRIBE </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'orange',
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