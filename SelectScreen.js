import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    Picker, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

export default class SelectScreen extends Component {
  state = {
    target: 'Home'
  }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset= {-300} style={styles.container} >
                    <TouchableWithoutFeedback style={styles.container} 
                            onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}> 
                                <Image style={styles.logo}
                                    source={require('../images/logo.png')}>
                                </Image> 
                            </View>
                            <View style={styles.infoContainer}>
                                <Picker
                                    style={styles.input}
                                    prompt='choose a datatype to view on the map'
                                >
                                  <Picker.Item label="Kenya Forest Mt" value="Home" />
                                  <Picker.Item label="Biomass Production" value="Bath" />
                                  <Picker.Item label="Urban vs Rural Population Distribution" value="Bedroom" />
                                  <Picker.Item label="Financial Touchpoints" value="MapII" />
                                </Picker>
                                <Picker
                                   selectedValue={this.state.target}
                                    style={styles.input}
                                    onValueChange={(itemValue, itemIndex) =>
                                      this.setState({target: itemValue})
                                    }
                                    prompt='choose a datatype to view on the map'
                                >
                                  <Picker.Item label="Administrative Boundaries" value="Home" />
                                  <Picker.Item label="Biomass Production" value="Bath" />
                                  <Picker.Item label="Urban vs Rural Population Distribution" value="Bedroom" />
                                  <Picker.Item label="Financial Touchpoints" value="MapII" />
                                </Picker>
                                <TouchableOpacity style={styles.buttonContainer} 
                                        onPress={() => this.props.navigation.navigate(this.state.target)}>
                                    <Text style={styles.buttonText}>TO MAP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginBottom: 30,
        marginTop: 100,
    },
    logo: {
        width: 210,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20,
        height: 300,
        padding: 20,
    },
    input: {
        height: 40,
        //backgroundColor: '#E6E6E6',
        color: 'grey',
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color :'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
})