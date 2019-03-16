import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//type Props = {};
export default class Splash extends Component/*<Props>*/ {
  render() {
    return (
     <View style={styles.container}>
        <Text style={styles.title}>TRIBE </Text>
     </View>
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