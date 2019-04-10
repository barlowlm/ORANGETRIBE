
import React, {Component} from 'react';
import {Platform, StyleSheet, Image, Text, View, TouchableWithoutFeedback, StatusBar, Keyboard, Button} from 'react-native';
import MapView, {Polygon} from 'react-native-maps';
import {Container, Header, Left, Body, Right, Icon, Title, Content, Item, Input, Picker, Form} from 'native-base';

export default class SettingsScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          map1: "satellite"
        };
      }
      static navigationOptions = 
        title: 'SettingsScreen',
      };
     mapChange = (value) => {
        this.setState({
          map1: value
        });
      }
      
    render (){
      const { navigate } = this.props.navigation;
      return(
           <Container navigation={this.props.navigation}>
            <Header 
              style ={{backgroundColor: '#cc6600'}} 
              androidStatusBarColor = '#994d00'
            >
           <Left>
            
            </Left>
            <Body>
              <Title>GeoFind</Title>
            </Body>
            <Right/>
          </Header>
          <Content>
           <Form> 
            <Text>Choose your map type</Text>
              <Picker
                navigation={this.props.navigation}
                note
                mode="dropdown"
                style={{ width: 300 }}
                selectedValue={this.state.map1}
               // onValueChange={this.mapChange}
               // onValueChange={this.onValueChange.bind(this)}
                onValueChange={() =>
                  navigate('MapScreen', {
                    userMap: Picker.itemValue,
                  })
                } 
              >
                <Picker.Item label="Satellite" value="satellite" />
                <Picker.Item label="Standard" value="standard" />
              </Picker>
           </Form>
          </Content>
        </Container> 
      
    )
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
        